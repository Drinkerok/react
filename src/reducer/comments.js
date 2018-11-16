import {normalizedComments as commentsDefault} from './../fixtures.js';
import {Actions} from './../components/constants.js';


const commentsMap = commentsDefault.reduce((acc, comment) => {
  acc[comment.id] = comment;
  return acc;
}, {});


export default (commentsState = commentsMap, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.ADD_COMMENT:
      const {id, comment, name} = payload.data;
      return Object.assign({}, commentsState, {
        [id]: {
          id,
          user: name,
          text: comment
        }
      });
  }

  return commentsState;
}