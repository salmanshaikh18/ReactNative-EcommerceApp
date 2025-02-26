import homeReducer from '@modules/home/api/slice';
import categoriesReducer from '@modules/categories/api/slice';
import {combineReducers} from 'redux';

export default combineReducers({
  home: homeReducer,
  categories: categoriesReducer
});
