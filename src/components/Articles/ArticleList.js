import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
// import './styles.css';
import {connect} from 'react-redux';
import {filteredArticlesSelector} from './../../selectors';
import {loadAllArticles} from './../../AC';
import Loader from './../Loader';
import {NavLink} from 'react-router-dom';

class ArticleList extends Component {
  static proptypes = {
    // from connect
    articles: PropTypes.array.isRequired,
  }

  componentDidMount() {
    const {isLoading, isLoaded, loadAllArticles} = this.props;
    if (!isLoaded && !isLoading) loadAllArticles();
  }


  render() {
    const {articles, isChildOpened, toggleChild, isLoading} = this.props;

    if (isLoading) return (<Loader />)

    const elements = articles.map((article) =>
      <li key={article.id} className="articles__item">
        <NavLink to = {`/articles/${article.id}`} activeStyle = {{color: 'red'}} >{article.title}</NavLink>
      </li>
    );

     return (
      <ul className="articles__list">
        {elements}
      </ul>
    );
  }
}







export default connect((state) => {
  return {
    articles: filteredArticlesSelector(state),
    isLoading: state.articles.loading,
    isLoaded: state.articles.loaded,
  }
}, {loadAllArticles})(ArticleList);