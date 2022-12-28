import React from 'react';
import styled from 'styled-components';

const TitleBox = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
`;
const LoginTitle = () => {
  return <TitleBox>로그인</TitleBox>;
};

export default LoginTitle;
