import React from 'react';
import styled from 'styled-components';

const OrderPriceBox = styled.div`
  padding-top: 30px;
  padding-right: 50px;
`;

const OrderPriceWrapper = styled.div`
  letter-spacing: -0.5px;
`;

const OrderAmout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  span:first-child {
    padding-right: 12px;
    font-size: 13px;
    font-weight: 500;
    color: #333;
    line-height: 20px;
  }

  span:nth-child(2) {
    font-weight: bold;
    font-size: 32px;
    color: #333;
    line-height: 36px;
  }

  span:last-child {
    padding-left: 5px;
    font-size: 20px;
    font-weight: 600;
    color: #333;
    line-height: 30px;
  }
`;

const OrderPrice = () => {
  return (
    <OrderPriceBox>
      <OrderPriceWrapper>
        <OrderAmout>
          <span>총 상품금액:</span>
          <span>10,000</span>
          <span>원</span>
        </OrderAmout>
      </OrderPriceWrapper>
    </OrderPriceBox>
  );
};

export default OrderPrice;
