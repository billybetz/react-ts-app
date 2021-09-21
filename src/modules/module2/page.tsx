import { FC } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Module2 } from '.';

const Wrapper = styled.div`

`;

const Module2Page: FC = () => {
  const params: { id: string } = useParams();

  console.log(params);

  const { id } = params;

  return (
    <Wrapper>
      <Module2 id={id} />
    </Wrapper>
  );
};

export default Module2Page;
