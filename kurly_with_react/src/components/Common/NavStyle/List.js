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
}
`;

const List = () => {
  return (
    <Wrapper>
      <li>신상품</li>
      <li>베스트</li>
      <li>알뜰쇼핑</li>
      <li>특가/혜택</li>
    </Wrapper>
  );
};

export default List;
