import React from 'react';
import styled from 'styled-components';
import CartInfo from '../components/Cart/CartInfo';

const CartWrap = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding-bottom: 80px;
`;

const CartTitle = styled.h2`
  padding: 50px 0px 48px;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
`;
const Cart = ({ convertPrice }) => {
  return (
    <CartWrap>
      <CartTitle>장바구니</CartTitle>
      <CartInfo convertPrice={convertPrice} />
    </CartWrap>
  );
};

export default Cart;
