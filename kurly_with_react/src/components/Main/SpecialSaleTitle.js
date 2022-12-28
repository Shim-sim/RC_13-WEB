import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 36px;
`;

const WrapperLink = styled.div`
  display: block;
  width: 694px;
  color: rgb(51, 51, 51);
  cursor: pointer;
  padding: 0px;
`;

const ImgBox = styled.div`
  height: 347px;
  overflow: hidden;
  position: relative;
  background-color: rgb(245, 245, 245);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in-out 0s;
  }
`;

const ImgSticker = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 8px;
  height: 32px;
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: 0.9;
  background-color: rgb(189, 118, 255);

  span {
    font-size: 15px;
    line-height: 1.43px;
    font-weight: 800;
    color: rgb(255, 255, 255);
  }
`;

const ButtonImg = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;

  img {
    width: 45px;
    height: 45px;
  }
`;

const TextBox = styled.div`
  padding: 15px 0px 0px;
`;

const TextSubTitle = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
  color: rgb(153, 153, 153);
  line-height: 1.38;
  word-break: break-word;
`;

const TextTitle = styled.h3`
  margin-bottom: 7px;
  font-size: 17px;
  line-height: 1.45;
  color: rgb(51, 51, 51);
  font-weight: 600;
`;

const TextPriceBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductPrice = styled.div`
  flex-flow: row nowrap;
  -webkit-box-align: center;
  align-items: center;
  display: flex;

  .discount {
    font-size: 20px;
    line-height: 30px;
    margin-right: 7px;
    font-weight: 800;
    color: rgb(250, 98, 47);
  }

  .price {
    padding-right: 6px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 800;
    color: rgb(51, 51, 51);
  }

  .original-price {
    font-size: 14px;
    line-height: 20px;
    text-decoration: line-through;
    color: rgb(181, 181, 181);
    font-weight: 600;
  }
`;

const ReviewBox = styled.div`
  padding-top: 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  color: rgb(153, 153, 153);
`;

const SpecialSaleTitle = () => {
  return (
    <Wrapper>
      <WrapperLink>
        <ImgBox>
          <img
            src={'https://img-cf.kurly.com/shop/data/goods/163963108595z0.jpg'}
            alt={'특가'}
          />
          <ImgSticker>
            <span>선물특가</span>
          </ImgSticker>
          <ButtonImg>
            <img
              src={
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='
              }
              alt={'장바구니'}
            />
          </ButtonImg>
        </ImgBox>
        <TextBox>
          <TextSubTitle>간편하게 섭취하는 콜라겐</TextSubTitle>
          <TextTitle>경남제약 콜라겐 플러스 60포</TextTitle>
          <TextPriceBox>
            <ProductPrice>
              <div>
                <span className="discount">75%</span>
                <span className="price">10,975원</span>
                <span className="original-price">43.900원</span>
              </div>
            </ProductPrice>
          </TextPriceBox>
          <ReviewBox>📝후기 999+</ReviewBox>
        </TextBox>
      </WrapperLink>
    </Wrapper>
  );
};

export default SpecialSaleTitle;
