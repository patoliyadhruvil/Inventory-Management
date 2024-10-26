import { combineReducers } from 'redux'
import { ProductReducer } from './ProductReducer';
import { authReducer } from './LoginReducer';

export const rootReducer = combineReducers({
    ProductReducer,
    authReducer,
  });