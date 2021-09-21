import { FC, useEffect } from 'react';

import { Module2Props } from './types';

const Module2: FC<Module2Props> = (props: Module2Props) => {
  const { id } = props;
  console.log('id : ', id);

  useEffect(() => {
    console.log('mount page2');
  }, []);

  return (
    <>
      {`render module 2 (${id})`}
    </>
  );
};

export default Module2;
