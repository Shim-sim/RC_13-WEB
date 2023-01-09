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
const Cart = ({ cart, convertPrice, setCart }) => {
  const handleRemove = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };
  const handleQuantity = (type, id, quantity) => {
    const item = cart.filter((el) => el.id === id)[0];
    const idx = cart.indexOf(item);
    const cartItem = {
      id: item.id,
      img: item.img,
      price: item.price,
      title: item.title,
      quantity: quantity,
    };
    if (type === 'plus') {
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    } else {
      if (quantity === 0) return;
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    }
  };

  return (
    <CartWrap>
      <CartTitle>장바구니</CartTitle>
      <CartInfo
        cart={cart}
        convertPrice={convertPrice}
        handleQuantity={handleQuantity}
        handleRemove={handleRemove}
      />
    </CartWrap>
  );
};

export default Cart;
