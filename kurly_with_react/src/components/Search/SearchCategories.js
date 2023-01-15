import React from 'react';
import styled from 'styled-components';

const arrayItem = [
  '카테고리',
  '브랜드',
  '가격',
  '혜택',
  '유형',
  '특정상품 제외',
];
const StyledBox = styled.div`
  position: sticky;
  width: 220px;
  flex-shrink: 0;
  height: 100%;
  max-height: calc(100vh - 120px);
  top: 80px;
  margin-right: 47px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const CategoryBox = styled.div`
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const CategoryItem = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 52px;
`;

const CategoryTitle = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: rgb(51, 51, 51);
`;

const SearchCategories = () => {
  return (
    <StyledBox>
      {arrayItem.map((item, index) => (
        <CategoryBox>
          <CategoryItem>
            <CategoryTitle>{item}</CategoryTitle>
          </CategoryItem>
        </CategoryBox>
      ))}
    </StyledBox>
  );
};

export default SearchCategories;
