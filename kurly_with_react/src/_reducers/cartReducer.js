const initailState = {
  cart: [],
  count: 1,
  total: 0,
};

const cartReducer = (state = initailState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (cartItem) {
        cartItem.quantity += state.count;
        console.log(state.cart);
      } else {
        const addToCart = {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          img: action.payload.img,
          quantity: state.count,
        };
        state.cart.push(addToCart);
        console.log(state.cart);
      }

      return {
        ...state,
        cart: [...state.cart],
      };

    case 'CONVERT':
      return action.payload.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    case 'INCREMENT':
      const newState = { ...state };
      newState.count++;
      return newState;

    case 'DECREMENT':
      const newState2 = { ...state };
      if (state.count === 1) break;
      newState2.count--;
      return newState2;

    default:
      return state;
  }
};

export default cartReducer;
