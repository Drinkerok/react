import {normalizedArticles as articlesDefault} from './../fixtures.js';
import {Actions} from './../components/constants.js';


const articlesMap = articlesDefault.reduce((acc, article) => {
  acc[article.id] = article;
  return acc;
}, {});


export default (articlesState = articlesMap, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.DELETE_ARTICLE:
      const articlesWithoutDeleted = Object.assign({}, articlesState);
      delete articlesWithoutDeleted[payload.id];
      return articlesWithoutDeleted;
      // return articlesState.filter((article) => article.id !== payload.id);

    case Actions.ADD_COMMENT:
      const {articleId, id} = payload.data;
      const newArticles = Object.assign({}, articlesState);
      newArticles[articleId].comments.push(id);
      return newArticles;
  }

  return articlesState;
}