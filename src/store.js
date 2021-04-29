import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

export default () => {
    const store = createStore(reducer, applyMiddleware(logger, thunk));
    return store;
}