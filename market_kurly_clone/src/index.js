const products = document.querySelector('.recommend_products_box');
const productsArray = [
  [
    'https://img-cf.kurly.com/shop/data/goods/1602045016638l0.jpg',
    '[퀴네] 블랙 갈릭소스',
    '4,900원',
  ],
  [
    'https://img-cf.kurly.com/shop/data/goods/1653037954138l0.jpeg',
    '[국내산 육우] 등심600g',
    '10,000원',
  ],
  [
    'https://img-cf.kurly.com/shop/data/goods/1508124853905l0.jpg',
    '[블랭 앵거스] 채끝등심',
    '9,900원',
  ],
  [
    '	https://img-cf.kurly.com/shop/data/goods/1558335070488l0.jpg',
    '[우유팩] 물광피부(10팩)',
    '4,100원',
  ],
];

// const IMG_TEMPLATE = (image) => {
//   `<div class="recommend_products">
//   <div class="image-container">
//     <img src=${image} alt="상품이미지"/>
//   </div>
//   <div class="product-info"></div>
// </div>`
// };

// 함수가 들어가면 안되는 이유?
productsArray.map((item) => {
  return products.insertAdjacentHTML(
    'beforeend',
    ` <div class="recommend_products">
    <div class="image-container">
      <img src=${item[0]} alt="상품이미지"/>
    </div>
    <div class="product-info">
      <h3>${item[1]}</h3>
      <span>${item[2]}</span>
    </div>
  </div>`
  );
});
