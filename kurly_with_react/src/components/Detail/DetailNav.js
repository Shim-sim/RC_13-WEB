import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 1050px;
  margin-top: 50px;
  background-color: #fff;
  position: sticky;
  top: 56px;
  z-index: 100;
`;

const ListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 60px;

  li {
    display: flex;
    flex: 1;
    border: 1px solid #eee;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #fafafa;
  }
`;

const DescriptionBox = styled.div`
  padding-top: 40px;
  position: relative;
  width: 1010px;
  padding-bottom: 100px;

  p {
    font-size: 36px;
    text-align: center;
    margin-top: 25px;
  }
`;
const DetailNav = () => {
  return (
    <>
      <Wrapper>
        <ListBox>
          <li>상품설명</li>
          <li>상세정보</li>
          <li>후기(1,762)</li>
          <li>문의</li>
        </ListBox>
      </Wrapper>
      <DescriptionBox>
        <img
          src={
            'https://img-cf.kurly.com/shop/data/goodsview/20200410/gv30000090108_1.jpg'
          }
          alt="메인베너"
        />
        <p>상품설명 내용</p>
      </DescriptionBox>
    </>
  );
};

export default DetailNav;
