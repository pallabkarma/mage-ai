from mage_ai.api.oauth_scope import OauthScope
from mage_ai.api.operations import constants
from mage_ai.api.policies.BasePolicy import BasePolicy
from mage_ai.api.presenters.BackfillPresenter import BackfillPresenter
from mage_ai.orchestration.constants import Entity
from mage_ai.settings.platform.utils import get_pipeline_from_platform


class BackfillPolicy(BasePolicy):
    def initialize_project_uuid(self):
        parent_model = self.options.get('parent_model')
        if self.resource:
            backfill = self.resource.model
            if backfill:
                pipeline = get_pipeline_from_platform(
                    backfill.pipeline_uuid,
                    check_if_exists=True,
                    repo_path=backfill.pipeline_schedule.repo_path,
                    use_repo_path=True,
                )
                if pipeline:
                    self.project_uuid = pipeline.project_uuid
        elif parent_model:
            self.project_uuid = parent_model.project_uuid
        else:
            super().initialize_project_uuid()

    @property
    def entity(self):
        parent_model = self.options.get('parent_model')
        if parent_model:
            return Entity.PIPELINE, parent_model.uuid

        return super().entity


BackfillPolicy.allow_actions([
    constants.DETAIL,
    constants.LIST,
], scopes=[
    OauthScope.CLIENT_PRIVATE,
], condition=lambda policy: policy.has_at_least_viewer_role())

BackfillPolicy.allow_actions([
    constants.CREATE,
    constants.DELETE,
    constants.UPDATE,
], scopes=[
    OauthScope.CLIENT_PRIVATE,
], condition=lambda policy: policy.has_at_least_editor_role())

BackfillPolicy.allow_read([
    'pipeline_run_dates',
    'run_status_counts',
    'total_run_count',
] + BackfillPresenter.default_attributes, scopes=[
    OauthScope.CLIENT_PRIVATE,
], on_action=[
    constants.DETAIL,
    constants.LIST,
], condition=lambda policy: policy.has_at_least_viewer_role())

BackfillPolicy.allow_read([] + BackfillPresenter.default_attributes, scopes=[
    OauthScope.CLIENT_PRIVATE,
], on_action=[
    constants.CREATE,
    constants.UPDATE,
    constants.DELETE,
], condition=lambda policy: policy.has_at_least_editor_role())

BackfillPolicy.allow_write([
    'name',
], scopes=[
    OauthScope.CLIENT_PRIVATE,
], on_action=[
    constants.CREATE,
], condition=lambda policy: policy.has_at_least_editor_role())

BackfillPolicy.allow_write([
    'block_uuid',
    'end_datetime',
    'interval_type',
    'interval_units',
    'name',
    'settings',
    'start_datetime',
    'status',
    'variables',
], scopes=[
    OauthScope.CLIENT_PRIVATE,
], on_action=[
    constants.UPDATE,
], condition=lambda policy: policy.has_at_least_editor_role())

BackfillPolicy.allow_query([
    'include_preview_runs',
    'include_run_count',
], scopes=[
    OauthScope.CLIENT_PRIVATE,
], on_action=[
    constants.DETAIL,
], condition=lambda policy: policy.has_at_least_viewer_role())

BackfillPolicy.allow_query([
    'include_run_count',
    'pipeline_uuid',
], scopes=[
    OauthScope.CLIENT_PRIVATE,
], on_action=[
    constants.LIST,
], condition=lambda policy: policy.has_at_least_viewer_role())
