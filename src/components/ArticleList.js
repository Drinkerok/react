import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';

function ArticleList(props) {
  const {articles, openChildId, toggleChild} = props;
  const elements = articles.map(article =>
    <li key={article.id}>
      <Article article={article}
               isOpen = {article.id == openChildId}
               toggleOpen = {toggleChild(article.id)}
      />
    </li>
  );

  return (
    <ul>
      {elements}
    </ul>
  )
}



ArticleList.proptypes = {
  articles: PropTypes.array.isRequired
}



export default accordion(ArticleList);