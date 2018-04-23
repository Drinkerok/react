import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';

function CommentsList(props) {
  const {isOpen, toggleOpen} = props;

  return (
    <div className="comments">
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
  
  const elements = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>);

  return (
    <ul>
      {elements}
    </ul>
  )
}



CommentsList.proptypes = {
  comments: PropTypes.array
}



export default toggleOpen(CommentsList);