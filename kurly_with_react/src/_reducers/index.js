import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import searchItemReducer from './searchItemReducer';

export default combineReducers({ cartReducer, searchItemReducer });
