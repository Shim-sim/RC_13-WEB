import React from 'react';
import styled from 'styled-components';
import StyledImg from '../components/Detail/ProductAlt';
import DetailInfo from '../components/Detail/DetailInfo';
import DetailNav from '../components/Detail/DetailNav';

const DetailBox = styled.div`
  position: relative;
  width: 1050px;
  height: 270vh;
  margin: 0 auto;
  padding-top: 30px;
`;

const DetailMain = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Detail = () => {
  return (
    <DetailBox>
      <DetailMain>
        <StyledImg />
        <DetailInfo />
      </DetailMain>
      <DetailNav />
    </DetailBox>
  );
};

export default Detail;
