import React from 'react';
import CommentsList from './CommentsList';
import PropTypes from 'prop-types';

function Article(props) {
  const {article, toggleOpen} = props;

  return (
    <div className="article">
      <h2 className="article__header" onClick={toggleOpen}>{article.title}</h2>
      {getBody(props)}
    </div>
  )
};



function getBody(props) {
  const {article, isOpen} = props;

  return isOpen && (
    <div>
      <div>{article.text}</div>
      <CommentsList comments={article.comments}></CommentsList>
    </div>
  )
}



Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array
  }).isRequired,
  toggleOpen: PropTypes.func.isRequired
}



export default Article;