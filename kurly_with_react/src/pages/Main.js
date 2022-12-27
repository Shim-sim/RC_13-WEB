import React from 'react';
import Banner from '../components/Main/Banner';
import RecommendBox from '../components/Main/RecommendBox';
import Slide from '../components/Common/Slide.js';
import { products } from '../data';

const Main = (props) => {
  return (
    <>
      <Banner />
      <RecommendBox>이 상품 어때요?</RecommendBox>
      <Slide data={products} />
    </>
  );
};

export default Main;
