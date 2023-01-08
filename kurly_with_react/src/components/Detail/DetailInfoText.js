import React, { useState } from 'react';
import styled from 'styled-components';
import ProductType from './ProductType';
import OrderPrice from './OrderPrice';
import IntoBasket from './IntoBasket';

const PriceBox = styled.h2`
  display: flex;
  align-items: flex-end;
  padding-top: 19px;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: -0.5px;
`;

const Price = styled.span`
  padding-right: 4px;
  font-size: 28px;
  color: #333;
`;

const PriceText = styled.span`
  display: inline-block;
  position: relative;
  top: 3px;
  font-size: 18px;
  color: #333;
  vertical-align: top;
`;

const ProductInfoBox = styled.div`
  margin-top: 20px;

  dl {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    overflow: hidden;
    width: 100%;
    padding: 17px 0 18px;
    border-top: 1px solid #f4f4f4;
    font-size: 14px;
    letter-spacing: -0.5px;
  }

  dt {
    position: relative;
    top: 1px;
    width: 128px;
    height: 100%;
    color: #666;
    line-height: 19px;
  }

  dd {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  p {
    display: block;
    font-size: 12px;
    color: #666;
    line-height: 16px;
    white-space: pre-line;
  }
`;

const ProductSelectBox = styled.div`
  padding-bottom: 40px;
`;

const DetailInfoText = ({
  paramsId,
  products,
  convertPrice,
  count,
  setCount,
  handleCart,
}) => {
  const HandleQuantity = (type) => {
    if (type === 'plus') {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };
  return (
    <>
      <PriceBox>
        <Price>{convertPrice(products[paramsId].price)}</Price>
        <PriceText>원</PriceText>
      </PriceBox>
      <ProductInfoBox>
        <dl>
          <dt>배송</dt>
          <dd>
            <h3>샛별배송</h3>
            <p>
              23시 전 주문 시 내일 아침 7시 전 도착 (대구·부산·울산 샛별배송
              운영시간 별도 확인)
            </p>
          </dd>
        </dl>
        <dl>
          <dt>판매자</dt>
          <dd>
            <h3>컬리</h3>
          </dd>
        </dl>
        <dl>
          <dt>포장타입</dt>
          <dd>
            <h3>상온 (종이포장)</h3>
            <p>택배배송은 에코 포장이 스티로폼으로 대체됩니다.</p>
          </dd>
        </dl>
        <dl>
          <dt>판매단위</dt>
          <dd>
            <h3>1개</h3>
          </dd>
        </dl>
        <dl>
          <dt>안내사항</dt>
          <dd>
            <h3>-수입시점에 따라 상이, 상세페이지 별도표기</h3>
          </dd>
        </dl>
      </ProductInfoBox>
      <ProductSelectBox>
        <ProductType
          products={products}
          paramsId={paramsId}
          count={count}
          HandleQuantity={HandleQuantity}
        />
        <OrderPrice
          products={products}
          paramsId={paramsId}
          count={count}
          convertPrice={convertPrice}
        />
        <IntoBasket handleCart={handleCart} />
      </ProductSelectBox>
    </>
  );
};

export default DetailInfoText;
