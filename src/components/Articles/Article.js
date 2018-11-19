import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentsList from './../Comments/CommentsList';
import {connect} from 'react-redux';
import {deleteArticle, loadArticle} from './../../AC';
import Loader from './../Loader';


class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      comments: PropTypes.array
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired,
    // from connect
    deleteArticle: PropTypes.func.isRequired,
    loadArticle: PropTypes.func.isRequired
  }

  componentWillReceiveProps({isOpen, loadArticle, article}) {
    if (!this.props.isOpen && isOpen && !article.text && !article.loading) loadArticle(article.id);
  }


  render() {
    const {article, toggleOpen} = this.props;

    return (
      <div>
        <h2 className="articles__header" onClick={toggleOpen}>{article.title}</h2>
        <button className="articles__delete" onClick = {this.handleDelete}>Удалить статью</button>
        {this.getBody()}
      </div>
    )
  }

  getBody = () => {
    const {article, isOpen} = this.props;

    if (article.loading) return <Loader />

    return isOpen && (
      <div>
        <div>{article.text}</div>
        <CommentsList article = {article} ></CommentsList>
      </div>
    )
  }

  handleDelete = () => {
    const {article, deleteArticle} = this.props;
    deleteArticle(article.id);
  }
}


export default connect(null, { deleteArticle, loadArticle })(Article);