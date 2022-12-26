/* eslint-disable */

import React from 'react';
import Categories from './NavStyle/Categories';
import List from './NavStyle/List';
import Deliver from './NavStyle/Deliver';
import styled from 'styled-components';

const NavWrap = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  justify-content: space-evenly;
  align-items: baseline;
  min-width: 1050px;
  height: 56px;
  margin: 0px auto;
  z-index: 100;
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
`;
const NavBar = () => {
  return (
    <NavWrap>
      <Categories />
      <List />
      <Deliver />
    </NavWrap>
  );
};

export default NavBar;
