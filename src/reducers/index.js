import { combineReducers } from 'redux';
import cart from './cart';
import datadownloading from './datadownloading';

export default combineReducers({
    cart,
    datadownloading
});