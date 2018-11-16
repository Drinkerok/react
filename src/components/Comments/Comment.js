import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {commentSelectorFactory} from './../../selectors';

function Comment({comment}) {
  return (
    <div className="comment">
      <div className="comment__autor">{comment.user}</div>
      <div className="comment__text">{comment.text}</div>
    </div>
  )
}



Comment.proptypes = {
  id: PropTypes.string.isRequired,
  // from connect
  comment: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}


const mapStateToProps = () => {
  const commentSelector = commentSelectorFactory();

  return (state, ownProps) => {
    return {
      comment: commentSelector(state, ownProps)
    }
  }
}



export default connect(mapStateToProps)(Comment);