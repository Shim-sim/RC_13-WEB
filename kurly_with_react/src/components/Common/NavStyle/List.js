/* eslint-disable */

import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  margin-left: 30px;
  font-weight: 600;

  li {
    display: flex;
    justify-content: center;
    width: 150px;
    height: 55px;
    padding-top: 18px;
    line-height: 20px;
    text-align: center;
  }

  li:hover {
    color: #9558aa;
    text-decoration: underline;
    text-underline-position: under;
  }
  @media screen and (max-width: 890px) {
    display: none;
  }
`;

const StyledInput = styled.div`
  background-color: rgb(247, 247, 247);
  height: 36px;
  display: none;
  border-radius: 10px;

  input {
    width: 230px;
    font-size: 13px;
    background-color: rgb(247, 247, 247);
    padding: 8px;
    border-radius: 8px;
  }

  @media screen and (max-width: 890px) {
    display: flex;
  }
`;

const List = () => {
  return (
    <>
      <Wrapper>
        <li>신상품</li>
        <li>베스트</li>
        <li>알뜰쇼핑</li>
        <li>특가/혜택</li>
      </Wrapper>
      <StyledInput>
        <input placeholder="검색어를 입력해주세요" />
      </StyledInput>
    </>
  );
};

export default List;
