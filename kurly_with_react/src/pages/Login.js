import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/Login/LoginForm';

const LoginWrapper = styled.div`
  min-width: 1050px;
  margin-top: 90px;
  margin-bottom: 60px;
  background-color: #fff;
`;
const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm />
    </LoginWrapper>
  );
};

export default Login;
