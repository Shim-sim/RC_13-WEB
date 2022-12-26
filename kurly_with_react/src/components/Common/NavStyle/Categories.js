/*eslint-disable*/

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  span:first-child {
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MS43SDBWMHptMCA2LjE1aDE2djEuN0gwdi0xLjd6bTAgNi4xNWgxNlYxNEgwdi0xLjd6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==);
    width: 16px;
    height: 14px;
    margin-right: 14px;
  }

  span:last-child {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.3px;
    color: rgb(51, 51, 51);
  }

  span:last-child:hover {
    color: #9558aa;
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const Categories = () => {
  return (
    <>
      <Wrapper>
        <span></span>
        <span>카테고리</span>
      </Wrapper>
    </>
  );
};

export default Categories;
