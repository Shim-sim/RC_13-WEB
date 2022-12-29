import React, { useState } from 'react';
import styled from 'styled-components';

const ProductTypeBox = styled.div`
  border-bottom: 1px solid rgb(244, 244, 244);
`;

const ProductTable = styled.dl`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
  padding: 17px 0 18px;
  border-top: 1px solid #f4f4f4;
  font-size: 14px;
  letter-spacing: -0.5px;

  dt {
    position: relative;
    top: 1px;
    width: 128px;
    height: 100%;
    color: #666;
    line-height: 19px;
  }
`;

const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 11px 10px 11px 15px;
  font-size: 12px;
  border: 1px solid #f4f4f4;
`;

const OrderBoxTitle = styled.div`
  line-height: 16px;
  width: 320px;
  color: rgb(51, 51, 51);
`;

const OrderButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
`;

const OrderButtonBox = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 88px;
  border-radius: 3px;
  border: 1px solid rgb(221, 223, 225);

  button:first-child {
    display: inline-flex;
    width: 28px;
    height: 28px;
    border: none;
    font-size: 1px;
    color: transparent;
    background-size: cover;
    background-color: transparent;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=);
    vertical-align: top;
  }

  button:last-child {
    display: inline-flex;
    width: 28px;
    height: 28px;
    border: none;
    font-size: 1px;
    color: transparent;
    background-size: cover;
    background-color: transparent;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
    vertical-align: top;
  }
`;

const OrderCount = styled.div`
  display: inline-flex;
  overflow: hidden;
  white-space: nowrap;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: rgb(51, 51, 51);
  text-align: center;
  width: 31px;
  height: 28px;
  line-height: 28px;
`;

const OrderPrice = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: black;
  padding-right: 5px;
`;

const ProductType = ({ count, HandleQuantity }) => {
  return (
    <ProductTypeBox>
      <ProductTable>
        <dt>상품선택</dt>
        <OrderBox>
          <OrderBoxTitle>[졸리마] 트윙클자M 8종</OrderBoxTitle>
          <OrderButtonWrapper>
            <OrderButtonBox>
              <button onClick={() => HandleQuantity('minus')} />
              <OrderCount>{count}</OrderCount>
              <button onClick={() => HandleQuantity('plus')} />
            </OrderButtonBox>
            <div>
              <OrderPrice>10,000원</OrderPrice>
            </div>
          </OrderButtonWrapper>
        </OrderBox>
      </ProductTable>
    </ProductTypeBox>
  );
};

export default ProductType;
