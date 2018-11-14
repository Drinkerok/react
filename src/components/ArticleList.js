import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';

function ArticleList(props) {
  const {articles, isChildOpened, toggleChild, dateRange} = props;

  const elements = articles.filter((article, i) => {
    const from = dateRange.from;
    const to = dateRange.to;

    if (!from) return true;
    const articleDate = Date.parse(article.date);
    const fromDate = Date.parse(from);

    if (!to) {
      return articleDate >= fromDate
    } else {
      const toDate = Date.parse(to);

      return articleDate >= fromDate && articleDate <= toDate;
    }
  }).map((article) =>
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