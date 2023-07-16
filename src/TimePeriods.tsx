import React from 'react';
import Content from './components/Content';
import styled from 'styled-components';

const BlockContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #F4F5F9;
`;

const TimePeriods: React.FC = () => {
  return (
    <BlockContainer>
      <Content />
    </BlockContainer>
  );
}

export default TimePeriods;
