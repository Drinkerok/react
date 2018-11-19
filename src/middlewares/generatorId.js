import {Actions} from './../components/constants';

export default (state) => (next) => (action) => {
  if (action.generateId !== true)  return next(action);

  next({
    ...action,
    randomId: (Date.now() + Math.random()).toString()
  });
}