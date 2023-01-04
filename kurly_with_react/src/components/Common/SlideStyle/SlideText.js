import React from 'react';
import styled from 'styled-components';

const ProductInfo = styled.div`
  position: relative;
`;

const ProductName = styled.h3`
  font-size: 16px;
  line-height: 1.45;
  font-weight: 400;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  letter-spacing: normal;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const ProductPrice = styled.span`
  font-size: 16;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
`;
const SlideText = ({ data }) => {
  return (
    <ProductInfo>
      <ProductName>{data.title}</ProductName>
      <ProductPrice>{data.price}</ProductPrice>
    </ProductInfo>
  );
};

export default SlideText;
