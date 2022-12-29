/* eslint-disable */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginInfoWrap = styled.div`
  position: absolute;
  right: 0;
  height: 10px;
  top: 0;
  z-index: 20;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 12px;

  a {
    display: block;
    cursor: pointer;
  }

  a:first-child {
    color: #5e0080;
  }

  div {
    width: 1px;
    height: 13px;
    margin: 0px 12px;
    background-color: rgb(217, 217, 217);
  }

  span {
    width: 8px;
    height: 5px;
    background-image: url(https://res.kurly.com/pc/ico/1908/ico_down_16x10.png);
    background-size: cover;
    background-position: center center;
    display: inline-block;
    margin-left: 5px;
    margin-bottom: 1px;
  }
`;

const LoginInfo = () => {
  return (
    <LoginInfoWrap>
      <a>회원가입</a>
      <div></div>
      <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
        로그인
      </Link>
      <div></div>
      <a>
        고객센터
        <span></span>
      </a>
    </LoginInfoWrap>
  );
};

export default LoginInfo;
