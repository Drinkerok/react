import {combineReducers} from 'redux';
import articlesReducer from './articles';
import filtersReducer from './filters';


export default combineReducers({
  articles: articlesReducer,
  filters: filtersReducer
});