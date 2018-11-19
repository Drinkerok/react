import {normalizedArticles as articlesDefault} from './../fixtures.js';
import {Actions, Status} from './../components/constants.js';
import {arrayToMap} from './../utils';
import {OrderedMap, Record} from 'immutable';


const StateRecord = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
});

const ArticleRecord = Record({
  text: undefined,
  title: '',
  id: undefined,
  date: undefined,
  loading: false,
  comments: [],
  commentsLoading: false,
  commentsLoaded: false,
});


export default (articlesState = new StateRecord(), action) => {
  const {type, payload, randomId, data} = action;

  switch (type) {
    case Actions.DELETE_ARTICLE:
      return articlesState.deleteIn(['entities', payload.id]);

    case Actions.ADD_COMMENT:
      return articlesState.updateIn(
        ['entities', payload.id, 'comments'],
        comments => comments.concat(randomId)
      );


    case Actions.LOAD_ALL_ARTICLES + Status.START:
      return articlesState.set('loading', true);

    case Actions.LOAD_ALL_ARTICLES + Status.SUCCESS:
      return articlesState
        .set('entities', arrayToMap(data, ArticleRecord))
        .set('loading', false)
        .set('loaded', true);


    case Actions.LOAD_ARTICLE + Status.START:
      return articlesState.setIn(['entities', payload.id, 'loading'], true);


    case Actions.LOAD_ARTICLE + Status.SUCCESS:
      return articlesState.setIn(['entities', payload.id], new ArticleRecord(payload.data));


    case Actions.LOAD_COMMENTS + Status.START:
      return articlesState.setIn(['entities', payload.articleId, 'commentsLoading'], true);

    case Actions.LOAD_COMMENTS + Status.SUCCESS:
      return articlesState
        .setIn(['entities', payload.articleId, 'commentsLoading'], false)
        .setIn(['entities', payload.articleId, 'commentsLoaded'], true)
  }

  return articlesState;
}