import React from 'react';
import Banner from '../components/Main/Banner';
import RecommendBox from '../components/Main/RecommendBox';
import Slide from '../components/Common/Slide.js';
import RecommendSale from '../components/Main/RecommendSale';
import SpecialSale from '../components/Main/SpecialSale';
import { products } from '../data';

const Main = (props) => {
  return (
    <>
      <Banner />
      <RecommendBox>이 상품 어때요?</RecommendBox>
      <Slide data={products} />
      <RecommendSale />
      <SpecialSale />
    </>
  );
};

export default Main;
