import React from 'react';
import styled from 'styled-components';
import LoginTitle from './LoginTitle';

const LoginFormBox = styled.div`
  width: 340px;
  margin: 0 auto;
  letter-spacing: -0.6px;
`;

const StyledForm = styled.form`
  div:first-child {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      height: 54px;
      font-size: 14px;
      width: 100%;
      border: 1px solid #ddd;
      line-height: 1.5;
      outline: none;
      box-sizing: border-box;
      padding: 0 11px 1px 15px;
      border-radius: 4px;
      margin-bottom: 14px;
    }
  }
`;

const FindIdAndPassword = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 13px;

  span {
    color: #333;
    cursor: pointer;
  }

  span:nth-child(2) {
    width: 1px;
    height: 10px;
    margin: 1px 6px 0;
  }
`;

const LoginButton = styled.div`
  margin-top: 28px;
  margin-bottom: 60px;
  width: 100%;

  button {
    font-weight: 600;
    border-radius: 4px;
    height: 54px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
  }

  button:first-child {
    background-color: #5e0080;
    color: white;
    border: 0 none;
  }

  button:last-child {
    background-color: white;
    color: #5e0080;
    border: 1px solid #5f0080;
    margin-top: 10px;
  }
`;
const LoginForm = () => {
  return (
    <>
      <LoginTitle />
      <LoginFormBox>
        <StyledForm>
          <div>
            <input type="text" placeholder="아이디를 입력해주세요" />
            <input type="password" placeholder="비밀번호를 입력해주세요" />
          </div>
          <FindIdAndPassword>
            <span>아이디찾기</span>
            <span>|</span>
            <span>비밀번호 찾기</span>
          </FindIdAndPassword>
          <LoginButton>
            <button>로그인</button>
            <button>회원가입</button>
          </LoginButton>
        </StyledForm>
      </LoginFormBox>
    </>
  );
};

export default LoginForm;
