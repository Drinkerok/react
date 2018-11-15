import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentsList from './../CommentsList';
import {connect} from 'react-redux';
import {deleteArticle} from './../../AC';


class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      comments: PropTypes.array
    }).isRequired,
    toggleOpen: PropTypes.func.isRequired,
    // from connect
    // deleteArticle: PropTypes.funct.isRequired
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

    return isOpen && (
      <div>
        <div>{article.text}</div>
        <CommentsList comments={article.comments}></CommentsList>
      </div>
    )
  }

  handleDelete = () => {
    const {article, deleteArticle} = this.props;
    deleteArticle(article.id);
  }
}


export default connect(null, { deleteArticle })(Article);