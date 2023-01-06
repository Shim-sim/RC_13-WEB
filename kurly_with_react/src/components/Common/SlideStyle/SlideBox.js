import React from 'react';
import styled from 'styled-components';
import SlideText from './SlideText';
import IntoCartButton from './IntoCartButton';
import { Link } from 'react-router-dom';

const ProductBox = styled.div`
  width: 1050px;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 100px auto;
`;

const ImgBox = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Container = styled.div`
  height: 420px;
`;

const ProductImg = styled.img.attrs({ alt: '제품 이미지' })`
  max-width: 95%;
  height: 75%;
  object-fit: cover;
  margin-right: 18px;
  transition: all 0.5s ease-in-out 0s;
  &:hover {
    transform: scale(1.009);
  }
`;

const SlideBox = ({ products, convertPrice }) => {
  return (
    <ProductBox>
      <ImgBox>
        {products.map((item) => (
          <Container key={item.id}>
            <Link
              to="/detail"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ProductImg src={item.img} />
            </Link>
            <SlideText products={item} convertPrice={convertPrice} />
            <IntoCartButton />
          </Container>
        ))}
      </ImgBox>
    </ProductBox>
  );
};

export default SlideBox;
