import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductsWrapper = styled.div`
  position: relative;
  width: 1050px;
  margin: 0px auto;
  overflow: hidden;
`;

const ProductBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: content-box;
  margin-right: 10px;
`;

const ImgBox = styled.div`
  height: 320px;
`;

const ProductImg = styled.img.attrs({ alt: '제품 이미지' })`
  width: 95%;
  height: 100%;
`;

const Button = styled.button`
  right: 25px;
  position: absolute;
  bottom: 85px;
  border: none;
  border-radius: 50%;
  background-color: #b196ae;
`;

const ButtonImg = styled.img`
  width: 45px;
  height: 45px;
`;

const ProductInfo = styled.div`
  position: relative;
  padding: 14px 10px 0px 0px;
`;

const ProductName = styled.h3`
  font-size: 16px;
  line-height: 1.45;
  font-weight: 400;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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

const StyledSlider = styled(Slider)`
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const Slide = ({ data }) => {
  const settings = {
    dots: true,
    rows: 1,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerPadding: '0px',
  };
  return (
    <ProductsWrapper>
      <StyledSlider {...settings}>
        {data.map((item, idx) => (
          <ProductBox>
            <ImgBox>
              <ProductImg src={item.img} />
              <Button>
                <ButtonImg
                  src={
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='
                  }
                />
              </Button>
            </ImgBox>
            <ProductInfo>
              <ProductName>{item.title}</ProductName>
              <ProductPrice>{item.price}</ProductPrice>
            </ProductInfo>
          </ProductBox>
        ))}
      </StyledSlider>
    </ProductsWrapper>
  );
};

export default Slide;
