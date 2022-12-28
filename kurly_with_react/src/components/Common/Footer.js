import React from 'react';
import styled from 'styled-components';
import AskInfo from './FooterStyle/AskInfo';
import KurlyInfo from './FooterStyle/KurlyInfo';

const FooterWrap = styled.div`
  padding-top: 30px;
  border-top: 2px solid #f7f7f7;
  border-bottom: 2px solid #f7f7f7;
`;

const FooterBox = styled.div`
  width: 1050px;
  margin: 0 auto;
`;

const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding-bottom: 30px;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <FooterBox>
        <FooterFlex>
          <AskInfo />
          <KurlyInfo />
        </FooterFlex>
      </FooterBox>
    </FooterWrap>
  );
};

export default Footer;
