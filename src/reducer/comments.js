import {normalizedComments as commentsDefault} from './../fixtures.js';
import {Actions, Status} from './../components/constants.js';
import {arrayToMap} from './../utils';
import {Map, OrderedMap, Record} from 'immutable';


const StateRecord = Record({
  entities: new OrderedMap({}),
  pagination: new Map({}),
  total: null,
})

const CommentRecord = Record({
  id: undefined,
  user: '',
  text: '',
});


export default (commentsState = new StateRecord(), action) => {
  const {type, payload, randomId, data} = action;

  switch (type) {
    case Actions.ADD_COMMENT:
      const {comment, name} = payload;
      return commentsState.setIn(['entities', randomId], {
        id: randomId,
        user: name,
        text: comment,
      });

    case Actions.LOAD_COMMENTS + Status.SUCCESS:
      return commentsState.update('entities', (entities) => entities.merge(arrayToMap(data, CommentRecord)));

    case Actions.LOAD_COMMENTS_FOR_PAGE + Status.START:
      return commentsState.setIn(['pagination', payload.page, 'loading'], true);

    case Actions.LOAD_COMMENTS_FOR_PAGE + Status.SUCCESS:
      return commentsState
        .set('total', data.total)
        .mergeIn(['entities'], arrayToMap(data.records, CommentRecord))
        .setIn(['pagination', payload.page, 'ids'], data.records.map((comment) => comment.id))
        .setIn(['pagination', payload.page, 'loading'], false)
  }

  return commentsState;
}