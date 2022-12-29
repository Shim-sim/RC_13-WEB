import React from 'react';
import styled from 'styled-components';
import DetailInfoText from './DetailInfoText';
const DetailInfoBox = styled.div`
  width: 560px;
  display: block;
`;

const DeliverType = styled.div`
  font-weight: 500;
  line-height: 1.36;
  letter-spacing: -0.5px;
  color: #999;
  margin-bottom: 6px;
  width: 500px;
`;

const DetailTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  h1 {
    width: 500px;
    font-weight: 500;
    font-size: 24px;
    color: #333;
    line-height: 34px;
    letter-spacing: -0.5px;
    word-break: keep-all;
    margin-right: 20px;
  }
`;

const ShareButton = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNEREQiIGN4PSIyMCIgY3k9IjIwIiByPSIxOS41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNSAxMSkiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjgiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iOSIgcj0iMi4xIi8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMTM3KSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI4Ljg2MyIgY3k9IjMiIHI9IjIuMSIvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTAgOC4xMzYgNi4zNjMgNC41Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNS4xMzcgMTgpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjguODYzIiBjeT0iMyIgcj0iMi4xIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNMCA4LjEzNiA2LjM2MyA0LjUiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==)
    no-repeat 50% 50%;
`;

const MoreInfo = styled.h2`
  padding-top: 5px;
  font-size: 14px;
  font-weight: 400;
  color: #b5b5b5;
  line-height: 19px;
  letter-spacing: -0.5px;
`;

const DetailInfo = () => {
  return (
    <DetailInfoBox>
      <DeliverType>샛별배송</DeliverType>
      <DetailTitleBox>
        <DetailTitle>
          <h1>[졸리마] 트윙클자 M 8종 (택1)</h1>
          <ShareButton />
        </DetailTitle>
        <MoreInfo>어디에나 활용 가능한 밀폐용기</MoreInfo>
      </DetailTitleBox>
      <DetailInfoText />
    </DetailInfoBox>
  );
};

export default DetailInfo;
