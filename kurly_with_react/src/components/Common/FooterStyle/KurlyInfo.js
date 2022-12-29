import React from 'react';
import styled from 'styled-components';
import { iconArray, policyArray } from '../../../data';
const KurlyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
`;

const KurlyPolicy = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px 0px 29px 0px;

  li:first-child {
    margin: 0;
  }

  li {
    margin-left: 14px;
    font-weight: 500;
  }
`;

const BusinessInfo = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #999;
  margin-bottom: 40px;

  strong {
    margin-left: 2px;
    color: #5f0080;
  }
`;

const IconInfo = styled.ul`
  display: flex;

  img {
    display: block;
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

const KurlyInfo = () => {
  return (
    <KurlyInfoWrapper>
      <KurlyPolicy>
        {policyArray.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </KurlyPolicy>
      <BusinessInfo>
        법인명 (상호) : 주식회사 컬리 | 사업자등록번호 : 2261-82-12312
        <strong>사업자정보 확인</strong>
        <br />
        통신판매업 : 제 2018-서울강남-01646 호 개인정보보호책임자 : 이원준
        <br />
        주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) 대표이사 : 김슬아
        <br />
        입점문의 : <strong>입점문의하기</strong>제휴문의 :
        <strong>business@kurlycorp.com</strong>
        <br />
        채용문의 : <strong>recruit@kurlycorp.com</strong>
        <br />
        팩스: 070 - 7500 - 6098
      </BusinessInfo>
      <IconInfo>
        {iconArray.map((item) => (
          <img key={item} src={item} alt={'icon'} />
        ))}
      </IconInfo>
    </KurlyInfoWrapper>
  );
};

export default KurlyInfo;
