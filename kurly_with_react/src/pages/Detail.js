import React from 'react';
import styled from 'styled-components';
import StyledImg from '../components/Detail/ProductAlt';
import DetailInfo from '../components/Detail/DetailInfo';
import DetailNav from '../components/Detail/DetailNav';
import { useParams } from 'react-router-dom';

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

const Detail = ({ products }) => {
  let { id } = useParams();
  let paramsId = parseInt(id);

  return (
    <DetailBox>
      <DetailMain>
        <StyledImg products={products} paramsId={paramsId} />
        <DetailInfo products={products} paramsId={paramsId} />
      </DetailMain>
      <DetailNav products={products} paramsId={paramsId} />
    </DetailBox>
  );
};

export default Detail;
