import React, { useEffect, useState } from 'react';
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
    color: black;
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

const LoginUser = styled.h3`
  font-size: 20px;
  font-weight: 500;
  text-align: center;

  p {
    display: inline-block;
    overflow: hidden;
    color: rgb(95, 0, 128);
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: top;
  }
`;

const LoginInfo = () => {
  const [userId, setUserId] = useState(localStorage.getItem('id'));

  useEffect(() => {}, []);

  return (
    <LoginInfoWrap>
      {userId ? (
        <LoginUser>
          <p>{userId}</p>님 환영합니다!
        </LoginUser>
      ) : (
        <>
          <a href="#!">회원가입</a>
          <div></div>
          <Link to="/login">로그인</Link>
          <div></div>
          <a href="#!">
            고객센터
            <span></span>
          </a>
        </>
      )}
    </LoginInfoWrap>
  );
};

export default LoginInfo;
