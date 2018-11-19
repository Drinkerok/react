import {normalizedComments as commentsDefault} from './../fixtures.js';
import {Actions, Status} from './../components/constants.js';
import {arrayToMap} from './../utils';
import {OrderedMap, Record} from 'immutable';


const StateRecord = Record({
  entities: new OrderedMap({})
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
  }

  return commentsState;
}