const initailState = {
  keyWord: '',
};

const searchItemReducer = (state = initailState, action) => {
  switch (action.type) {
    case 'ADD_SEARCH':
      return {
        ...state,
        keyWord: action.payload,
      };

    default:
      return state;
  }
};

export default searchItemReducer;
