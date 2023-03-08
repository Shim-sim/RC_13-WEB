export const addCart = (item) => {
  return {
    type: 'ADD_CART',
    payload: item,
  };
};

export const deleteCart = (item) => {
  return {
    type: 'DELETE_CART',
    payload: item,
  };
};

export const countIncrement = (count) => {
  return {
    type: 'INCREMENT',
    payload: count,
  };
};

export const countDecrement = (count) => {
  return {
    type: 'DECREMENT',
    payload: count,
  };
};

export const quantityIncrement = (count) => {
  return {
    type: 'QUANTITY_INCREMENT',
    payload: count,
  };
};

export const quantityDecrement = (count) => {
  return {
    type: 'QUANTITY_DECREMENT',
    payload: count,
  };
};

//searchHandler
// 액션에 정의되어 있는 내용이 reducer에 의해서 핸들링이 된다.
// 그 핸들링에 따라서 업데이트가 일어난다.
// 그리고 store의 값을 통해 컴포넌트에 반영이 된다.
export const addSearchItem = (item) => {
  return {
    type: 'ADD_SEARCH',
    payload: item,
  };
};
