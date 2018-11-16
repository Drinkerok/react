import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from './../../decorators/accordion';
import './styles.css';
import {connect} from 'react-redux';
import {filteredArticlesSelector} from './../../selectors';

function ArticleList(props) {
  const {articles, isChildOpened, toggleChild} = props;

  // const elements = Object.keys(articles).map((id) =>
  //   <li key={id} className="articles__item">
  //     <Article article = {articles[id]}
  //              toggleOpen = {toggleChild(id)}
  //              isOpen = {isChildOpened(id)}
  //     />
  //   </li>
  // );

  const elements = articles.map((article) =>
    <li key={article.id} className="articles__item">
      <Article article = {article}
               toggleOpen = {toggleChild(article.id)}
               isOpen = {isChildOpened(article.id)}
      />
    </li>
  );

  return (
    <ul className="articles__list">
      {elements}
    </ul>
  )
}



ArticleList.proptypes = {
  // from connect
  articles: PropTypes.array.isRequired,
  // from accordion decorator
  toggleChild: PropTypes.func.isRequired,
  isChildOpened: PropTypes.func.isRequired
}



export default connect((state) => {
  return {
    articles: filteredArticlesSelector(state)
  }
})(accordion(ArticleList));