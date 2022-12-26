/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import LoginInfo from './HeaderStyle/LoginInfo';
import TitleInfo from './HeaderStyle/TitleInfo';

const HeaderWrap = styled.div`
  position: relative;
  width: 1050px;
  height: 100px;
  margin: 7px auto;
  letter-spacing: -0.3px;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <LoginInfo />
      <TitleInfo />
    </HeaderWrap>
  );
};

export default Header;
