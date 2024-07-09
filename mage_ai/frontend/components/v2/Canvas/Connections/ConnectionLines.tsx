import React from 'react';
import styles from '@styles/scss/apps/Canvas/Pipelines/Builder.module.scss';
import { motion } from 'framer-motion';

export function linePathKey(linePaths: Record<string, LinePathType>): string {
  const lines1 = Object.values(linePaths ?? {})
  const keys1 = lines1?.map(({ key }) => key).sort()?.join('--');
  return keys1;
}

export type LinePathType = {
  id: string;
  key: string;
  paths: React.ReactNode[];
};

type ConnectionLinesProps = {
  linePaths?: Record<string, LinePathType>;
  id?: string;
  zIndex?: number;
};

const LinesComponent: React.FC<ConnectionLinesProps> = ({
  id,
  linePaths,
  zIndex,
}: ConnectionLinesProps) => (
  <motion.svg
    className={[styles.connectionLines]?.join(' ')}
    id={id}
    initial
    style={{
      height: '100%',
      left: 0,
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex,
    }}
  >
    {Object.values(linePaths ?? {})?.flatMap(({ paths }) => paths)}
  </motion.svg>
);

function areEqual(prevProps, nextProps) {
  const lines1 = Object.values(prevProps?.linePaths ?? {})
  const lines2 = Object.values(nextProps?.linePaths ?? {})
  const keys1 = linePathKey(prevProps?.linePaths);
  const keys2 = linePathKey(nextProps?.linePaths);

  // console.log(
  //   ['keys1', keys1],
  //   ['keys2', keys2],
  //   keys1 === keys2,
  // );

  // console.log(
  //   prevProps, nextProps,
  //   lines1?.length === lines2?.length,
  //   prevProps.zIndex === nextProps.zIndex,
  //   prevProps.id === nextProps.id,
  //   keys1 === keys2,
  // )

  return (
    lines1?.length === lines2?.length &&
    prevProps.zIndex === nextProps.zIndex &&
    prevProps.id === nextProps.id &&
    keys1 === keys2
  );
}

export const ConnectionLines = React.memo(LinesComponent, areEqual);
