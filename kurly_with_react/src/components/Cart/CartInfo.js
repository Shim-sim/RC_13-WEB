import React from 'react';
import styled from 'styled-components';
import CartDelivery from './CartDelivery';
import CartProducts from './CartProducts';

const CartInfoWrap = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  letter-spacing: -0.5px;
`;

const CartInfo = () => {
  return (
    <CartInfoWrap>
      <CartProducts />
      <CartDelivery />
    </CartInfoWrap>
  );
};

export default CartInfo;
