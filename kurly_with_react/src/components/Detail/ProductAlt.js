import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.div`
  width: 430px;
  height: 552px;
  background: url(${(props) => props.backImg}) 0% 0% / cover;
`;

const ProductAlt = () => {
  return (
    <StyledImg
      backImg={'https://img-cf.kurly.com/shop/data/goods/1586496334858l0.jpg'}
    />
  );
};

export default ProductAlt;
