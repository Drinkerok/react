import {normalizedComments as commentsDefault} from './../fixtures.js';
import {Actions} from './../components/constants.js';
import {arrayToMap} from './../utils';


export default (commentsState = arrayToMap(commentsDefault), action) => {
  const {type, payload, randomId} = action;

  switch (type) {
    case Actions.ADD_COMMENT:
      const {comment, name} = payload;
      return Object.assign({}, commentsState, {
        [randomId]: {
          id: randomId,
          user: name,
          text: comment
        }
      });
  }

  return commentsState;
}