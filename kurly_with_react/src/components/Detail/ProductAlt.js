import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.div`
  width: 430px;
  height: 552px;
  background: url(${(props) => props.backImg}) 0% 0% / cover;
`;

const ProductAlt = ({ products, paramsId }) => {
  return <StyledImg backImg={`${products[paramsId].img}`} />;
};

export default ProductAlt;
