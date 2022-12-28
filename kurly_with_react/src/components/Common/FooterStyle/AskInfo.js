import React from 'react';
import styled from 'styled-components';
import { askText } from '../../../data';

const StrongText = styled.div`
  display: block;
  padding-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
  line-height: 40px;

  span {
    margin-left: 8px;
    font-weight: normal;
    font-size: 16px;
  }
`;

const HappyText = styled.h2`
  padding-bottom: 17px;
  font-weight: 500;
  line-height: 29px;
  font-size: 20px;
`;

const AskBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const AskFlex = styled.div`
  display: flex;
  flex-direction: row;

  button {
    display: block;
    background: white;
    width: 140px;
    height: 40px;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    line-height: 39px;
    text-align: center;
    margin: 16px 0 16px 0;
  }

  div {
    display: block;
    margin-top: 17px;
    margin-left: 10px;
    color: #999;
    letter-spacing: -0.5px;
    line-height: 16.8px;
    white-space: pre-line;
  }
`;

const AskInfo = () => {
  return (
    <div>
      <HappyText>고객행복센터</HappyText>
      <StrongText>
        1644-1107
        <span> 월~토요일 오전 8시 - 오후 6시 </span>
      </StrongText>
      <AskBlock>
        {askText.map((item) => {
          return (
            <AskFlex key={item}>
              <button>{item[0]}</button>
              <div>{item[1]}</div>
            </AskFlex>
          );
        })}
      </AskBlock>
    </div>
  );
};

export default AskInfo;
