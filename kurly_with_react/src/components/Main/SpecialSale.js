import React, { useEffect, useState } from 'react';
import SpecialSaleTitle from './SpecialSaleTitle';
import styled from 'styled-components';
import timerIcon from '../assets/timer.svg';

const Wrapper = styled.div`
  width: 1050px;
  margin: 0px auto;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 80px 0px;
`;

const TimerBox = styled.div`
  width: 249px;
`;

const SaleTitle = styled.h2`
  font-size: 28px;
  color: rgb(51, 51, 51);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.26px;
  margin-bottom: 10px;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  color: rgb(153, 153, 153);
  font-weight: normal;
  line-height: 1.3;
  letter-spacing: normal;
  margin-bottom: 24px;
`;

const TimerFlexBox = styled.div`
  display: flex;
  img {
    margin-right: 5px;
  }
`;

const TimeUnits = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 136px;
  font-size: 32px;
  font-weight: 800;
  color: rgb(51, 51, 51);

  span {
    position: relative;
    flex-shrink: 0;
    min-width: 33px;
    line-height: 47px;
  }
  span:first-child::after,
  span:nth-child(2)::after {
    content: ':';
    position: absolute;
    width: 11px;
    height: 50px;
    top: 0px;
    right: -11px;
    font-size: 30px;
  }
`;

const LastText = styled.p`
  font-size: 14px;
  color: rgb(204, 204, 204);
  font-weight: normal;
  line-height: 1.43;
  letter-spacing: -0.4px;
  margin-top: 32px;
`;

const SpecialSale = () => {
  const [min, setMin] = useState(51);
  const [sec, setSec] = useState(59);

  useEffect(() => {
    let timer = setInterval(() => {
      setSec((sec) => sec - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (sec === -1) {
      setMin((min) => min - 1);
      setSec((sec) => (sec = 59));
    }
  }, [sec]);
  return (
    <Wrapper>
      <TimerBox>
        <SaleTitle>선물세트특가</SaleTitle>
        <SubTitle>24시간 선물세트 한정특가</SubTitle>
        <TimerFlexBox>
          <img src={timerIcon} alt={'타이머'} />
          <TimeUnits>
            <span>19</span>
            <span>{min}</span>
            <span>{sec}</span>
          </TimeUnits>
        </TimerFlexBox>
        <LastText>망설이면 늦어요!</LastText>
      </TimerBox>
      <SpecialSaleTitle />
    </Wrapper>
  );
};

export default SpecialSale;
