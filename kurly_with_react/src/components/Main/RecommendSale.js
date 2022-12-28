import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 1050px;
  margin: 0px auto;
  margin-top: 40px;
  padding: 40px 0px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RecommendSale = () => {
  return (
    <Box>
      <Img
        src={
          'https://product-image.kurly.com/banner/random-band/pc/img/e7e0566c-40b4-40b7-a036-8af74ba5976a.jpg'
        }
      />
    </Box>
  );
};

export default RecommendSale;
