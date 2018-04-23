import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';

function ArticleList(props) {
  const {articles, isChildOpened, toggleChild} = props;

  const elements = articles.map(article =>
    <li key={article.id}>
      <Article article={article}
               toggleOpen={toggleChild(article.id)}
               isOpen={isChildOpened(article.id)}
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
  articles: PropTypes.array.isRequired,
  // from accordion decorator
  toggleChild: PropTypes.func.isRequired,
  isChildOpened: PropTypes.func.isRequired
}



export default accordion(ArticleList);