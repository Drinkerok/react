import React from 'react';
import CommentForm from './CommentsForm';
import Comment from './Comment';
import PropTypes from 'prop-types';
import toggleOpen from './../../decorators/toggleOpen';
import './styles.css';

function CommentsList(props) {
  const {isOpen, toggleOpen, articleId} = props;

  return (
    <div className="comments">
      <CommentForm articleId = {articleId} />
      <button className="comments__toggle" onClick={toggleOpen}>
        {isOpen ? "Закрыть комментарии" : "Открыть комментарии"}
      </button>
      {getBody(props)}
    </div>
  )
}

function getBody({isOpen, comments = []}) {
  if (!isOpen) return null;

  if (!comments || !comments.length) {
    return (
      <div>Нет комментариев</div>
    )
  }

  const elements = comments.map(id => <li key = {id}><Comment id = {id} /></li>);

  return (
    <ul>
      {elements}
    </ul>
  )
}



CommentsList.proptypes = {
  comments: PropTypes.array,
  articleId: PropTypes.string.isRequired,
  // from toggleOpen decorator
  isOpen: PropTypes.bool
}



export default toggleOpen(CommentsList);