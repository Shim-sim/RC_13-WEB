import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { products } from '../../data';
import convertPrice from '../../utils/convertPrice';

const StyledBox = styled.div`
  width: 100%;
`;

const ProductsBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 538px;
  color: rgb(51, 51, 51);
`;

const ImgBox = styled.div`
  position: relative;
  background-color: rgb(245, 245, 245);
  width: 249px;
  height: 320px;
  margin-right: 23px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in-out 0s;
  }
`;

const ProductName = styled.h3`
  font-size: 16px;
  line-height: 1.45;
  font-weight: 500;
  margin-bottom: 8px;
  letter-spacing: normal;
`;

const ProductPrice = styled.span`
  font-size: 16;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
`;

const SearchProducts = () => {
  const keyWord = useSelector((state) => state.searchItemReducer.keyWord);
  const productsItem = products.filter((item) => {
    return item.title.includes(keyWord);
  });

  return (
    <StyledBox>
      <ProductsBox>
        {productsItem.map((item) => (
          <React.Fragment key={item.id}>
            <ImgBox>
              <img src={item.img} alt="img" />
              <ProductName>{item.title}</ProductName>
              <ProductPrice>{convertPrice(item.price)}원</ProductPrice>
            </ImgBox>
          </React.Fragment>
        ))}
      </ProductsBox>
    </StyledBox>
  );
};

export default SearchProducts;
