import React from 'react';
import Banner from '../components/Main/Banner';
import RecommendBox from '../components/Main/RecommendBox';
import Slide from '../components/Common/Slide.js';
import RecommendSale from '../components/Main/RecommendSale';
import SpecialSale from '../components/Main/SpecialSale';

const Main = ({ products, convertPrice }) => {
  return (
    <>
      <Banner />
      <RecommendBox>이 상품 어때요?</RecommendBox>
      <Slide products={products} convertPrice={convertPrice} />
      <RecommendSale />
      <SpecialSale />
    </>
  );
};

export default Main;
