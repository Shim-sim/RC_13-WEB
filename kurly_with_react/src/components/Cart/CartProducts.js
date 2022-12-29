import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 724px;
`;

const ProductSelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 10px 16px 2px;
  font-size: 14px;
  line-height: 26px;
  border-bottom: 1px solid black;
  font-weight: 500;x
`;

const CartLabel = styled.label`
  display: inline-flex;
  font-size: 14px;
  line-height: 26px;
  padding: 0;
  color: #333;
`;

const CartCheckImg = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

const SplitText = styled.span`
  display: inline-block;
  width: 1px;
  height: 14px;
  background: #d4d1d1;
  margin: 6px 21px 0 22px;
  vertical-align: top;
`;

const CartBox = styled.div`
  border-bottom: 1px solid #f4f4f4;
`;

const EmpryCart = styled.p`
  padding: 115px 0;
  border-top: 1px solid #333;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #b5b5b5;
`;
const CartProducts = () => {
  return (
    <Wrapper>
      <ProductSelectBox>
        <div>
          <CartLabel>
            <CartCheckImg
              src={
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K'
              }
            />
            <span>전체선택(0/0)</span>
          </CartLabel>
          <SplitText />
          <span style={{ verticalAlign: 'top' }}>선택삭제</span>
        </div>
      </ProductSelectBox>
      <CartBox>
        {/* 이 부분 조건문 추가해서 uI조작 */}
        <EmpryCart>장바구나에 담긴 상품이 없습니다</EmpryCart>
      </CartBox>
    </Wrapper>
  );
};

export default CartProducts;

// Wrapper 안에는 div가 총 3개가 있다.
// 1번은 상단 전체선택 및 삭제 ProductSelectBox
// 2번은 상품 목록을 보여주는것 2번은 조건문을 주어서 상품이 있으면 ui 없으면 다른 uI형태로 보여줄 것. <CartBox>
// 3번도 1번과 전부 동일한 uI를 보여주는데 왜 있는지 모르겠다 우선 만들어보자
