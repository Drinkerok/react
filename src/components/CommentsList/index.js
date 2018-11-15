import React from 'react';
import CommentForm from './../CommentForm';
import Comment from './../Comment';
import PropTypes from 'prop-types';
import toggleOpen from './../../decorators/toggleOpen';
import './styles.css';

function CommentsList(props) {
  const {isOpen, toggleOpen} = props;

  return (
    <div className="comments">
      <CommentForm />
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
  comments: PropTypes.array,
  // from toggleOpen decorator
  isOpen: PropTypes.bool
}



export default toggleOpen(CommentsList);