/* eslint-disable */

import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel style={{ margin: '0px auto 40px' }}>
      {[0, 1, 2, 3].map((item, index) => (
        <Carousel.Item key={item} interval={2000}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + 'banner' + `${item}.jpeg`}
            alt="First slide"
            style={{ height: '370px' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
