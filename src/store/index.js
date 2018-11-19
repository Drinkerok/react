import {createStore, applyMiddleware} from 'redux';
import reducer from './../reducer';
import logger from './../middlewares/logger';
import generatorId from './../middlewares/generatorId';
import api from './../middlewares/api';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk, api, generatorId, logger);

const store = createStore(reducer, {}, enhancer);

window.store = store;

export default store;