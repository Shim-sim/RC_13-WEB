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
        cartItem.quantity += action.payload.quantity;
      } else {
        const addToCart = {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          img: action.payload.img,
          quantity: action.payload.quantity,
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

    default:
      return state;
  }
};

export default cartReducer;
