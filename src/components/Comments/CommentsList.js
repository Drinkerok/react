import React, {Component} from 'react';
import CommentForm from './CommentsForm';
import Comment from './Comment';
import PropTypes from 'prop-types';
import toggleOpen from './../../decorators/toggleOpen';
import {loadComments} from './../../AC';
import Loader from './../Loader';
import {connect} from 'react-redux';
import './styles.css';


class CommentsList extends Component {
  static proptypes = {
    article: PropTypes.object.isRequired,
    // from toggleOpen decorator
    isOpen: PropTypes.bool,
    // from connect
    loadComments: PropTypes.func.isRequired,
  }

  componentWillReceiveProps({isOpen, loadComments, article}) {
    if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
      loadComments(article.id);
    }
  }


  render() {
    const {isOpen, toggleOpen, article} = this.props;

    return (
      <div className="comments">
        <CommentForm articleId = {article.id} />
        <button className="comments__toggle" onClick={toggleOpen}>
          {isOpen ? "Закрыть комментарии" : "Открыть комментарии"}
        </button>
        {getBody({isOpen, article})}
      </div>
    );
  }
}

function getBody({isOpen, article: {comments = [], id, commentsLoaded, commentsLoading}}) {
  if (!isOpen) return null;

  if (commentsLoading) return <Loader />;
  if (!commentsLoaded) return null;


  if (!comments.length) {
    return (
      <div>Нет комментариев</div>
    )
  }

  return (
    <ul>
      {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
    </ul>
  )
}



export default connect(null, { loadComments })(toggleOpen(CommentsList));