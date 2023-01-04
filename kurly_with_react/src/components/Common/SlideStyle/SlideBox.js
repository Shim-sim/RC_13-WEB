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
  width: 95%;
  height: 75%;
  margin-right: 18px;
`;

const SlideBox = ({ data }) => {
  return (
    <ProductBox>
      <ImgBox>
        {data.map((item) => (
          <Container key={item.id}>
            <Link
              to="/detail"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ProductImg src={item.img} />
            </Link>
            <SlideText data={item} />
            <IntoCartButton />
          </Container>
        ))}
      </ImgBox>
    </ProductBox>
  );
};

export default SlideBox;
