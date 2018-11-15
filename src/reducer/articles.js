import {articles as articlesDefault} from './../fixtures.js';
import {Actions} from './../components/constants.js';


export default (articlesState = articlesDefault, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id);
  }

  return articlesState;
}