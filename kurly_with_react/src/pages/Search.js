import React from 'react';
import styled from 'styled-components';
import SearchCategories from '../components/Search/SearchCategories';
import SearchItem from '../components/Search/SearchItem';

const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 80px;
  background-color: rgb(255, 255, 255);
`;

const SearchBox = styled.div`
  width: 1050px;
  margin: 0px auto;
`;

const SearchHeader = styled.h3`
  margin-top: 50px;
  font-weight: 500;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.5px;
  text-align: center;
`;
const SearchMain = styled.div`
  position: relative;
  display: flex;
  width: 1050px;
  margin-top: 50px;
  margin-bottom: 75px;
  height: 300vh;
`;

const Search = () => {
  return (
    <SearchWrapper>
      <SearchBox>
        <SearchHeader>props나 리덕스로 받아서 데이터 넣어줄것</SearchHeader>
        <SearchMain>
          <SearchCategories />
          <SearchItem />
        </SearchMain>
      </SearchBox>
    </SearchWrapper>
  );
};

export default Search;
