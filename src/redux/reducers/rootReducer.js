import LoginReducer from './authReducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
  login: LoginReducer,
});
export default RootReducer;
