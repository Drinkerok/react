import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({comment}) {
  return (
    <div className="comment">
      <div className="comment__autor">{comment.user}</div>
      <div className="comment__text">{comment.text}</div>
    </div>
  )
}



Comment.proptypes = {
  comment: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}