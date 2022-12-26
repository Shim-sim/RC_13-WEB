/* eslint-disable */

import styled from 'styled-components';

const DeliverInfo = styled.a`
  height: 32px;
  padding: 7px 16px;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 18px;
  color: rgb(102, 102, 102);
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.32px;

  span {
    color: rgb(95, 0, 128);
    font-weight: 500;
  }
`;

const Deliver = () => {
  return (
    <div style={{ marginBottom: '5px' }}>
      <DeliverInfo>
        <span>샛별・낮 </span>
        배송안내
      </DeliverInfo>
    </div>
  );
};

export default Deliver;
