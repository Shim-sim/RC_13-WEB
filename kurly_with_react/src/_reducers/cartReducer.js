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
      } else {
        const addToCart = {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          img: action.payload.img,
          quantity: state.count,
        };
        state.cart.push(addToCart);
      }

      return {
        ...state,
        cart: [...state.cart],
        total: state.total + action.payload.price * state.count,
      };

    case 'DELETE_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price * action.payload.quantity,
      };

    case 'INCREMENT':
      const newState = { ...state };
      newState.count++;
      return newState;

    case 'DECREMENT':
      const newState2 = { ...state };
      if (state.count === 1) return state;
      newState2.count--;
      return newState2;

    case 'QUANTITY_INCREMENT':
      const plus = state.cart.find((item) => item.id === action.payload.id);

      if (plus) {
        plus.quantity += 1;
      }
      return {
        ...state,
        cart: [...state.cart],
        total: state.total + action.payload.price,
      };

    case 'QUANTITY_DECREMENT':
      const minus = state.cart.find((item) => item.id === action.payload.id);
      if (minus && minus.quantity > 1) {
        minus.quantity -= 1;

        return {
          ...state,
          cart: [...state.cart],
          total: state.total - action.payload.price,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default cartReducer;
