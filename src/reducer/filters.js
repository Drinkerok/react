import {Actions} from './../components/constants.js';


const DEFAULT_FILTERS = {
  date: {
    from: null,
    to: null
  }
}

export default (filters = DEFAULT_FILTERS, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.CHANGE_DATE_RANGE:
      return {...filters, date: payload.range};
  }

  return filters;
}