import LoginReducer from './authReducer';
import {combineReducers} from 'redux';
import AvatarReducer from './avatarReducer';

const RootReducer = combineReducers({
  login: LoginReducer,
  avatar: AvatarReducer,
});
export default RootReducer;
