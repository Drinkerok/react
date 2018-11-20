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
  console.log('______________load article');
  return (dispatch) => {
    dispatch({
      type: Actions.LOAD_ARTICLE + Status.START,
      payload: {id}
    });

    setTimeout(() => {
      fetch(`${API.ARTICLE}${id}`)
        .then((response) => response.json())
        .then((data) => {

          console.log('______________loaded article');
          return data;
        })
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

export function checkAndLoadCommentsForPage(page) {
  return (dispatch, getState) => {
    const {comments: {pagination}} = getState();
    if (pagination.getIn([page, 'loading']) || pagination.getIn([page, 'ids'])) return;

    dispatch({
      type: Actions.LOAD_COMMENTS_FOR_PAGE,
      payload: { page },
      callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
    });
  }
}