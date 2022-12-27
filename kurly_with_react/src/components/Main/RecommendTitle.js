import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  margin-bottom: 27px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  color: black;
  font-size: 28px;
  line-height: 1.15;
  font-weight: 600;
  letter-spacing: -0.26px;
`;

const RecommendTitle = ({ children }) => {
  return (
    <Box>
      <Title>{children}</Title>
    </Box>
  );
};

export default RecommendTitle;
