import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Module1 } from '.';

const Wrapper = styled.div`

`;

const Module1Page: FC = () => {
  const { search } = useLocation();
  const name = new URLSearchParams(search).get('token');

  return (
    <Wrapper>
      <Module1 queryParam={name} />
    </Wrapper>
  );
};

export default Module1Page;
