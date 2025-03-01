import homeReducer from '@modules/home/api/slice';
import categoriesReducer from '@modules/categories/api/slice';
import {combineReducers} from 'redux';
import cartReducer from '@modules/cart/api/slice';
import accountReducer from '@modules/account/api/slice';

export default combineReducers({
  home: homeReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  account: accountReducer,
});
