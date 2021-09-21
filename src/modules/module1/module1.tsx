import { FC, useEffect } from 'react';

import { Module1Props } from './types';

const Module1: FC<Module1Props> = (props: Module1Props) => {
  useEffect(() => {
    console.log('mount Module1');
  }, []);

  const { queryParam } = props;

  return (
    <>
      {`render module 1 (${queryParam})`}
    </>
  );
};

export default Module1;
