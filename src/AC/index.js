import {Actions, Status, API} from './../components/constants';

export function deleteArticle(id) {
  return {
    type: Actions.DELETE_ARTICLE,
    payload: { id }
  }
}

export function changeDate(range) {
  return {
    type: Actions.CHANGE_DATE_RANGE,
    payload: range
  }
}

export function addComment(data) {
  return {
    type: Actions.ADD_COMMENT,
    payload: data,
    generateId: true,
  }
}

export function loadAllArticles() {
  return {
    type: Actions.LOAD_ALL_ARTICLES,
    callAPI: API.ARTICLES
  }
}

export function loadArticle(id) {
  return (dispatch) => {
    dispatch({
      type: Actions.LOAD_ARTICLE + Status.START,
      payload: {id}
    });

    setTimeout(() => {
      fetch(`${API.ARTICLE}${id}`)
        .then((response) => response.json())
        .then((data) => dispatch({
          type: Actions.LOAD_ARTICLE + Status.SUCCESS,
          payload: { id, data }
        }))
        .catch((error) => dispatch({
          type: Actions.LOAD_ARTICLE + Status.FAIL,
          payload: { id, error }
        }))
    }, 1000)
  }
}

export function loadComments(articleId) {
  return {
    type: Actions.LOAD_COMMENTS,
    payload: {articleId},
    callAPI: `/api/comment?article=${articleId}`,
  }
}