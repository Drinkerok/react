import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentsList from './../Comments/CommentsList';
import {connect} from 'react-redux';
import {deleteArticle, loadArticle} from './../../AC';
import Loader from './../Loader';


class Article extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    // from connect
    article: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array
    }),
    deleteArticle: PropTypes.func.isRequired,
    loadArticle: PropTypes.func.isRequired
  }



  componentDidMount() {
    const {loadArticle, article, id} = this.props
    if (!article || (!article.text && !article.loading)) loadArticle(id);
  }


  render() {
    const {article, toggleOpen} = this.props;

    if (!article) return null;

    return (
      <div>
        <h2 className="articles__header" onClick={toggleOpen}>{article.title}</h2>
        <button className="articles__delete" onClick = {this.handleDelete}>Удалить статью</button>
        {this.getBody()}
      </div>
    )
  }

  getBody = () => {
    const {article} = this.props;
    if (!article.id) return null;
    if (article.loading) return <Loader />

    return (
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


export default connect((state, ownProps) => ({
  article: state.articles.entities.get(ownProps.id)
}), { deleteArticle, loadArticle })(Article);