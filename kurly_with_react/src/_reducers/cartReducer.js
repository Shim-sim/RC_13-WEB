const initailState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initailState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];

    case 'CONVERT':
      return action.payload.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    default:
      return state;
  }
};

export default cartReducer;
