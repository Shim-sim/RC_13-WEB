import React from 'react';
import styled from 'styled-components';

const CartList = styled.li`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  padding: 20px 0px;
`;

const CartStyleBtn = styled.label`
  margin-left: 2px;

  img {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

const CartImgBox = styled.div`
  display: inline-block;
  width: 60px;
  height: 78px;
  margin-right: 20px;
`;

const CartImg = styled.span`
  display: block;
  height: 100%;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const CartTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
  margin-right: 20px;
  font-weight: 600;
  line-height: 22px;
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

const CartItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 127px;
  text-align: right;
  font-weight: 700;
  line-height: 24px;
  word-break: break-all;
`;

const DeleteItemBtn = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 9px;
  display: inline-block;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSA5Ljc2MiAyMC4yMzggOSAxNSAxNC4yMzggOS43NjIgOSA5IDkuNzYyIDE0LjIzOCAxNSA5IDIwLjIzOGwuNzYyLjc2MkwxNSAxNS43NjIgMjAuMjM4IDIxbC43NjItLjc2MkwxNS43NjIgMTV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==);
  border: none;
  background-color: transparent;
`;

const CartItem = ({ item, convertPrice, handleQuantity, handleRemove }) => {
  return (
    <ul>
      <CartList>
        <CartStyleBtn>
          <img
            src={
              'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K'
            }
          />
        </CartStyleBtn>
        <CartImgBox>
          <CartImg bgImg={`${item.img}`} />
        </CartImgBox>
        <CartTitle>{item.title}</CartTitle>
        <OrderButtonBox>
          <button
            onClick={() => handleQuantity('minus', item.id, item.quantity - 1)}
          />
          <OrderCount>{item.quantity}</OrderCount>
          <button
            onClick={() => handleQuantity('plus', item.id, item.quantity + 1)}
          />
        </OrderButtonBox>
        <CartItemPrice>
          {convertPrice(item.price * item.quantity)}원
        </CartItemPrice>
        <DeleteItemBtn onClick={() => handleRemove(item.id)} />
      </CartList>
    </ul>
  );
};

export default CartItem;
