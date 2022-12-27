import React from 'react';
import styled from 'styled-components';
import RecommendTitle from './RecommendTitle';

const Wrapper = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding: 40px 0px;
`;

const RecommendBox = ({ children }) => {
  return (
    <Wrapper>
      <RecommendTitle>{children}</RecommendTitle>
    </Wrapper>
  );
};

export default RecommendBox;
