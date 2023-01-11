export const addCart = (item) => {
  return {
    type: 'ADD_CART',
    payload: item,
  };
};
