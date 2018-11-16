import {normalizedArticles as articlesDefault} from './../fixtures.js';
import {Actions} from './../components/constants.js';
import {arrayToMap} from './../utils';


export default (articlesState = arrayToMap(articlesDefault), action) => {
  const {type, payload, randomId} = action;

  switch (type) {
    case Actions.DELETE_ARTICLE:
      const articlesTmp = {...articlesState};
      delete articlesTmp[payload.id];
      return articlesTmp;

    case Actions.ADD_COMMENT:
      const {articleId} = payload;
      const article = articlesState[articleId];

      return {
        ...articlesState,
        [articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      }
  }

  return articlesState;
}