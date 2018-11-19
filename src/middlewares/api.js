import {Status} from './../components/constants';


export default (store) => (next) => (action) => {
  const {callAPI, type, ...rest} = action;

  if (callAPI === undefined) return next(action);

  next({
    ...rest,
    type: type + Status.START
  })

  setTimeout(() => {
    fetch(callAPI)
      .then((response) => response.json())
      .then((data) => next({
        ...rest,
        type: type + Status.SUCCESS,
        data
      }))
      .catch((error) => next({
        ...rest,
        type: type + Status.FAIL,
        error
      }))
    }, 1000);
}