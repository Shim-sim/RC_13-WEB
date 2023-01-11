import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../../_actions';
import styled from 'styled-components';

const BasketWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 8px;

  span {
    display: block;
    padding: 0 10px;
    text-align: center;
    overflow: hidden;
    width: 56px;
    height: 56px;
    border-radius: 3px;
    color: #333;
    font-size: 16px;
    background-color: #fff;
    border: 1px solid #ddd;
  }

  span:first-child {
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K)
      no-repeat 50% 50%;
  }

  span:nth-child(2) {
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iIzVGMDA4MCIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==)
      no-repeat 50% 50%;
  }
`;

const ButtonBox = styled.div`
  display: block;
  padding: 18px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 52px;
  font-weight: 600;
  border-radius: 3px;
  color: #fff;
  background-color: #5f0080;
  border: 0 none;
  cursor: pointer;

  span {
    font-size: 16px;
    margin-top: 18px;
  }
`;

const StyledRedHeart = styled.div`
  display: block;
  padding: 0 10px;
  text-align: center;
  overflow: hidden;
  width: 56px;
  height: 56px;
  border-radius: 3px;
  color: #333;
  font-size: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBmaWxsPSIjRkY1QTVBIiBzdHJva2U9IiNGRjVBNUEiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K)
    no-repeat 50% 50%;
`;

const IntoBasket = ({ products, paramsId }) => {
  const [heartToggle, setHeartToggle] = useState(false);
  const dispatch = useDispatch();
  const onHeartHandler = () => {
    setHeartToggle(!heartToggle);
  };
  return (
    <BasketWrapper>
      {heartToggle ? (
        <StyledRedHeart onClick={onHeartHandler} />
      ) : (
        <span onClick={onHeartHandler}></span>
      )}
      <span></span>
      <ButtonBox onClick={() => dispatch(addCart(products[paramsId]))}>
        장바구니 담기
      </ButtonBox>
    </BasketWrapper>
  );
};

export default IntoBasket;
