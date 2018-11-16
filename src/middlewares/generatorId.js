import {Actions} from './../components/constants';

export default (state) => (next) => (action) => {
  const {type, payload} = action;
  if (type === Actions.ADD_COMMENT) {
    payload.data.id = guid();
  }
  next(action);
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}