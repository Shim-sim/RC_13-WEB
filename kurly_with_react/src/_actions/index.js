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

export const addSearchItem = (item) => {
  return {
    type: 'ADD_SEARCH',
    payload: item,
  };
};
