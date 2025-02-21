import homeReducer from '@modules/home/api/slice';
import {combineReducers} from 'redux';

export default combineReducers({
  home: homeReducer,
});
