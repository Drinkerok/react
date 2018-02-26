import React from 'react';
import {render} from 'react-dom';

export default function Comment({comment}) {
  return (
    <div className="comment">
      <div className="comment__autor">{comment.user}</div>
      <div className="comment__text">{comment.text}</div>
    </div>
  )
}