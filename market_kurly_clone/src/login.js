const askBox = document.querySelector('.footer_helpinfo_ask');
const askBoxArray = [
  [
    '카카오톡 문의',
    '월~토요일 | 오전 7시 - 오후 6시<br />일~공요일 | 오전 7시 - 오후 1시',
  ],
  ['1:1 문의', '365일<br />고객센터 운영시간에 순차적으로 답변드리겠습니다.'],
  [
    '대량주문 문의',
    '월~토요일 | 오전 7시 - 오후 6시<br />점심시간 | 낮 12시 - 오후 1시',
  ],
];

askBoxArray.map((item) => {
  return askBox.insertAdjacentHTML(
    'beforeend',
    `
  <div class="footer_helpinfo_box">
  <button>${item[0]}</button>
  <div class="footer_helpinfo_text">
    ${item[1]}
  </div>
</div>
  `
  );
});
