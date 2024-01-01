import {combineReducers} from 'redux';
import AuthReducer from './authReducer/reducer';

export const RootReducer = combineReducers({
  AuthReducer,
});
