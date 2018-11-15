import {Actions} from './../components/constants';

export function deleteArticle(id) {
  return {
    type: Actions.DELETE_ARTICLE,
    payload: { id }
  }
}

export function changeDate(range) {
  return {
    type: Actions.CHANGE_DATE_RANGE,
    payload: { range }
  }
}

export function filterArticles(filters) {
  return {
    type: Actions.FILTER_ARTICLES,
    payload: { filters }
  }
}