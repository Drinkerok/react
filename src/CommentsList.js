import React from 'react';
import {render} from 'react-dom';
import Comment from './Comment';

export default function CommentsList({comments}) {
  if (!comments) {
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