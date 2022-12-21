const ASK_BOX = document.querySelector('.footer_helpinfo_ask');
const FOOTER_POLICY = document.querySelector('.footer_helpinfo_policy');
const FOOTER_ICON = document.querySelector('.footer_helpinfo_icon');

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

const policyArray = [
  '컬리소개',
  '컬리소개영상',
  '인재채용',
  '이용약관',
  '개인정보처리방침',
  '이용안내',
];

const iconArray = [
  'https://res.kurly.com/pc/ico/1810/ico_instagram.png',
  '	https://res.kurly.com/pc/ico/1810/ico_fb.png',
  'https://res.kurly.com/pc/ico/1810/ico_blog.png',
  '	https://res.kurly.com/pc/ico/1810/ico_naverpost.png',
  'https://res.kurly.com/pc/ico/1810/ico_youtube.png',
];

askBoxArray.map((item) => {
  return ASK_BOX.insertAdjacentHTML(
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

policyArray.map((item) => {
  return FOOTER_POLICY.insertAdjacentHTML(
    'beforeend',
    `
    <li>${item}</li>
  `
  );
});

iconArray.map((item) => {
  return FOOTER_ICON.insertAdjacentHTML(
    'beforeend',
    `
    <img src=${item} alt="링크아이콘" />
  `
  );
});
