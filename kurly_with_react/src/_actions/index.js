export const addCart = (item) => {
  return {
    type: 'ADD_CART',
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
