from __future__ import annotations

import asyncio
import json
import os
import pickle
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional

import joblib

from mage_ai.data_preparation.models.block.outputs import get_output_data_async
from mage_ai.data_preparation.models.variables.constants import VariableType
from mage_ai.kernels.magic.environments.enums import EnvironmentType, EnvironmentUUID
from mage_ai.kernels.magic.environments.pipeline import Pipeline
from mage_ai.kernels.magic.environments.utils import decrypt_secret, encrypt_secret
from mage_ai.settings.platform import get_repo_paths_for_file_path
from mage_ai.settings.repo import get_repo_path, get_variables_dir
from mage_ai.shared.array import find
from mage_ai.shared.dates import now
from mage_ai.shared.files import (
    exists_async,
    getsize_async,
    makedirs_async,
    read_async,
    safe_delete_dir_async,
    write_async,
)
from mage_ai.shared.models import BaseDataClass
from mage_ai.shared.path_fixer import remove_base_repo_directory_name

MESSAGES_FILENAME = 'messages'
LOCALS_FILENAME = 'locals.pkl'
OUTPUT_FILENAME = 'output.pkl'
OUTPUT_FILENAME = 'output.pkl'
VARIABLES_FILENAME = 'variables.joblib'
ENVIRONMENT_VARIABLES_FILENAME = 'environment_variables.joblib'


@dataclass
class Environment(BaseDataClass):
    environment_variables: Optional[Dict] = None
    type: Optional[EnvironmentType] = EnvironmentType.CODE
    uuid: Optional[str] = EnvironmentUUID.EXECUTION
    variables: Optional[Dict] = None

    def __post_init__(self):
        self.serialize_attribute_enum('type', EnvironmentType)

    @property
    def namespace(self) -> str:
        if self.type and self.uuid:
            return os.path.join(EnvironmentType.from_value(self.type), self.uuid)
        return ''

    async def run_process(
        self,
        kernel: Any,
        message: str,
        message_request_uuid: Optional[str] = None,
        output_path: Optional[str] = None,
        process_options: Optional[Dict] = None,
    ) -> Any:
        output_manager = OutputManager.load(
            namespace=self.namespace,
            path=remove_base_repo_directory_name(output_path or get_repo_path()),
            uuid=(message_request_uuid or str(now(True))),
        )

        if EnvironmentType.PIPELINE == self.type and self.uuid:
            process = await Pipeline(
                self.uuid,
                kernel,
                output_manager,
                environment_variables=self.environment_variables,
                variables=self.variables,
            ).run_process(
                message,
                message_request_uuid=message_request_uuid,
                **(process_options or {}),
            )
        else:
            process = kernel.run(
                message,
                message_request_uuid=message_request_uuid,
                output_manager=output_manager,
                **(process_options or {}),
            )

        return process


@dataclass
class VariableOutput(BaseDataClass):
    data: List[Any]
    uuid: str
    partition: Optional[str] = None
    type: Optional[VariableType] = None
    types: Optional[List[VariableType]] = None

    def __post_init__(self):
        self.serialize_attribute_enum('type', VariableType)
        self.serialize_attribute_enums('types', VariableType)


@dataclass
class ExecutionOutput(BaseDataClass):
    uuid: str
    namespace: str
    path: str
    absolute_path: Optional[str] = None
    environment: Optional[Environment] = None
    messages: Optional[List[Any]] = field(default_factory=list)
    output: Optional[Any] = None

    def __post_init__(self):
        self.serialize_attribute_class('environment', Environment)
        if not self.environment and self.namespace:
            env_type, env_uuid = os.path.split(self.namespace)
            self.environment = Environment.load(type=env_type, uuid=env_uuid)
        if self.messages:
            from mage_ai.kernels.magic.models import ExecutionResult

            self.messages = [ExecutionResult.load(**m) for m in self.messages]

    async def delete(self):
        await OutputManager.load(
            namespace=self.namespace,
            path=self.path,
            uuid=self.uuid,
        ).delete()

    async def load_output(
        self,
        max_results: Optional[int] = None,
        sample: Optional[bool] = None,
        sample_count: Optional[int] = None,
    ) -> Any:
        from mage_ai.kernels.magic.constants import ExecutionStatus, ResultType

        message = find(
            lambda x: ExecutionStatus.SUCCESS == x.status and ResultType.OUTPUT == x.type,
            self.messages,
        )

        if not message:
            return None

        if self.environment and EnvironmentType.PIPELINE == self.environment.type:
            from mage_ai.data_preparation.models.pipeline import Pipeline

            metadata = message.metadata or {}
            path = metadata.get('path') or ''
            full_path = get_repo_paths_for_file_path(path).get('full_path') or ''

            pipeline_uuid = metadata.get('pipeline_uuid')
            pipeline = await Pipeline.get_async(
                pipeline_uuid, repo_path=full_path, all_projects=not full_path
            )

            block_type = metadata.get('block_type') or ''
            block_uuid = metadata.get('block_uuid') or ''
            block = pipeline.get_block(block_uuid, block_type)

            execution_partition = metadata.get('execution_partition')

            outputs = await get_output_data_async(
                block,
                block_uuid=block_uuid,
                execution_partition=execution_partition,
                max_results=max_results,
                sample=sample,
                sample_count=sample_count,
            )
            self.output = [VariableOutput.load(**m) for m in outputs]


@dataclass
class OutputManager(BaseDataClass):
    namespace: str
    path: str
    uuid: str

    @classmethod
    async def load_with_messages(
        cls, path: str, namespace: str, limit: Optional[int] = None
    ) -> List[ExecutionOutput]:
        absolute_path = os.path.join(get_variables_dir(), path, namespace)
        if not await exists_async(absolute_path):
            return []

        paths = sorted(
            [fp for fp in os.listdir(absolute_path) if not fp.startswith('.')],
            key=lambda x: x.lower(),
        )
        if limit is not None:
            paths = paths[:limit]

        execution_outputs = await asyncio.gather(*[
            cls.load(
                namespace=namespace,
                path=path,
                uuid=os.path.basename(fpath),
            ).build_output()
            for fpath in paths
        ])
        return execution_outputs

    @classmethod
    async def delete_output_batch(cls, path: str, namespace: str):
        path = os.path.join(
            get_variables_dir(),
            path,
            namespace,
        )
        if await exists_async(path):
            await safe_delete_dir_async(path)

    async def build_output(self) -> ExecutionOutput:
        file_path = os.path.join(self.absolute_path, MESSAGES_FILENAME)
        messages = []
        if await exists_async(file_path):
            text = await read_async(file_path)
            if text:
                for line in text.split('\n'):
                    if line.strip():
                        data = json.loads(line)
                        messages.append(data)

        return ExecutionOutput.load(
            absolute_path=self.absolute_path,
            messages=messages,
            namespace=self.namespace,
            path=self.path,
            uuid=self.uuid,
        )

    @property
    def absolute_path(self) -> str:
        path = os.path.join(get_variables_dir(), self.path, self.namespace, self.uuid)
        return path

    async def exists(self) -> bool:
        return await exists_async(self.absolute_path)

    async def delete(self, if_empty: Optional[bool] = None) -> None:
        if await self.exists() and (not if_empty or not await getsize_async(self.absolute_path)):
            await safe_delete_dir_async(self.absolute_path)

    async def append_message(self, data: str, filename: Optional[str] = None) -> None:
        await self.__write(filename or MESSAGES_FILENAME, data, flush=True, mode='a')

    async def store_local_variables(self, data: Any, filename: Optional[str] = None) -> None:
        await self.__store_object(filename or LOCALS_FILENAME, data)

    async def store_output(self, data: Any, filename: Optional[str] = None) -> None:
        await self.__store_object(filename or OUTPUT_FILENAME, data)

    async def store_variables(self, data: Dict, filename: Optional[str] = None) -> None:
        await self.__store_object(filename or VARIABLES_FILENAME, data)

    async def store_environment_variables(
        self, data: Dict, filename: Optional[str] = None
    ) -> None:
        await self.__store_object(filename or ENVIRONMENT_VARIABLES_FILENAME, data)

    async def read_encrypted_dictionary(self, filename: str, ckey: Optional[str] = None) -> Dict:
        text = await read_async(os.path.join(self.absolute_path, filename))
        data = {}
        for key, value in json.loads(text):
            data[key] = decrypt_secret(value.encode(), ckey) if isinstance(value, str) else value
        return data

    async def __store_object(self, filename: str, data: Any) -> None:
        await makedirs_async(self.absolute_path)
        with open(os.path.join(self.absolute_path, filename), 'wb') as file:
            pickle.dump(data, file)

    async def __store_encrypted_dictionary(
        self, filename: str, data: Dict, ckey: Optional[str] = None
    ) -> None:
        await makedirs_async(self.absolute_path)
        data_encrypted = {}
        for key, value in data.items():
            data_encrypted[key] = encrypt_secret(value, ckey) if isinstance(value, str) else value

        joblib.dump(
            data_encrypted,
            os.path.join(self.absolute_path, filename),
        )

    async def __write(
        self, filename: str, data: str, flush: Optional[bool] = None, mode: str = 'w'
    ) -> None:
        await makedirs_async(os.path.dirname(self.absolute_path))
        await write_async(
            os.path.join(self.absolute_path, filename),
            data,
            flush=flush,
            mode=mode,
            overwrite=True,
        )
