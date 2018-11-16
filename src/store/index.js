import {createStore, applyMiddleware} from 'redux';
import reducer from './../reducer';
import logger from './../middlewares/logger';
import generatorId from './../middlewares/generatorId';

const enhancer = applyMiddleware(logger, generatorId);

const store = createStore(reducer, {}, enhancer);

window.store = store;

export default store;