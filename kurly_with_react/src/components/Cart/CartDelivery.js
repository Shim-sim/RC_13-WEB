import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import convertPrice from '../../utils/convertPrice';

const CartDeliveryWrapper = styled.div`
  position: relative;
  width: 284px;
  min-height: 942px;
`;

const CartDeliveryBox = styled.div`
  position: sticky;
  top: 56px;
  width: 284px;
  padding-top: 60px;
`;

const DeliveryAdressBox = styled.div`
  padding: 23px 19px 20px;
  border: 1px solid #f2f2f2;
  border-bottom: 0;
`;

const DestinationTitle = styled.h3`
  padding-left: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  background: url('https://res.kurly.com/pc/service/cart/2007/ico_location.svg')
    0 50% no-repeat;
  background-size: 20px 20px;
`;

const DestinationSearchBox = styled.div`
  padding-top: 12px;
  font-size: 16px;
  line-height: 24px;
  color: #333;
`;

const SearchText = styled.p`
  padding-bottom: 16px;
  font-weight: 500;

  em {
    font-style: normal;
    color: #5f0080;
    white-space: pre-line;
  }
`;

const SearchAdressButton = styled.button`
  display: block;
  padding: 0 10px;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 36px;
  border-radius: 3px;
  color: #5f0080;
  background-color: #fff;
  border: 1px solid #5f0080;
`;

const ProductsPriceBox = styled.div`
  padding: 19px 18px 18px 20px;
  border: 1px solid #f2f2f2;
  background-color: #fafafa;
`;

const PriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${(props) => (props.top === 'none' ? '0px' : '12px')};
  border-top: ${(props) => props.border && '1px solid #f4f4f4'};
  margin-top: ${(props) => props.margin && '20px'};
`;

const PriceTitle = styled.span`
  width: 100px;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
`;

const PriceTotal = styled.span`
  font-size: 18px;
  line-height: 24px;
  text-align: right;

  span {
    padding-left: 2px;
    font-size: 16px;
    font-weight: normal;
    vertical-align: bottom;
  }
`;

const DeliveryBottomBox = styled.div`
  padding-top: 20px;
`;
const CartDelivery = () => {
  const totalPrice = useSelector((state) => state.cartReducer.total);

  return (
    <CartDeliveryWrapper>
      <CartDeliveryBox>
        <DeliveryAdressBox>
          <DestinationTitle>배송지</DestinationTitle>
          <DestinationSearchBox>
            <SearchText>
              <em>배송지를 등록하고</em>
              <br />
              <span>구매 가능한 상품을 확인하세요!</span>
            </SearchText>
          </DestinationSearchBox>
          <SearchAdressButton>주소검색</SearchAdressButton>
        </DeliveryAdressBox>
        <ProductsPriceBox>
          <PriceBlock top="none">
            <PriceTitle>상품금액</PriceTitle>
            <PriceTotal>
              0<span>원</span>
            </PriceTotal>
          </PriceBlock>
          <PriceBlock>
            <PriceTitle>상품할인금액</PriceTitle>
            <PriceTotal>
              0<span>원</span>
            </PriceTotal>
          </PriceBlock>
          <PriceBlock>
            <PriceTitle>배송비</PriceTitle>
            <PriceTotal>
              0<span>원</span>
            </PriceTotal>
          </PriceBlock>
          <PriceBlock border="true" margin="true">
            <PriceTitle>결제예정금액</PriceTitle>
            <PriceTotal>
              {convertPrice(totalPrice)}
              <span>원</span>
            </PriceTotal>
          </PriceBlock>
        </ProductsPriceBox>
        <DeliveryBottomBox></DeliveryBottomBox>
      </CartDeliveryBox>
    </CartDeliveryWrapper>
  );
};

export default CartDelivery;
