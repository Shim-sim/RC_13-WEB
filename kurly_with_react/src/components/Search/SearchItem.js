import React from 'react';
import styled from 'styled-components';

const arrayList = [
  '추천순',
  '신상품순',
  '판매량순',
  '혜택순',
  '낮은 가격순',
  '높은 가격순',
];
const ItemBox = styled.div`
  width: 100%;
`;

const ItemInfo = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-bottom: 20px;
  line-height: 20px;
`;

const ItemLength = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgb(51, 51, 51);
`;

const ListOfTest = styled.ul`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  li {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-left: 8px;
    font-size: 14px;
    color: rgb(153, 153, 153);
    cursor: pointer;
  }

  li:first-child {
    letter-spacing: -0.3px;
    font-weight: 500;
    color: rgb(51, 51, 51);
    cursor: default;
  }
`;

const ItemFlex = styled.div``;

const SearchItem = () => {
  return (
    <ItemBox>
      <ItemInfo>
        <ItemLength>총 개수</ItemLength>
        <ListOfTest>
          {arrayList.map((item) => (
            <li>{item}</li>
          ))}
        </ListOfTest>
      </ItemInfo>
    </ItemBox>
  );
};

export default SearchItem;
