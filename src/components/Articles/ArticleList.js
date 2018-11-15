import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from './../../decorators/accordion';
import './styles.css';
import {connect} from 'react-redux';

function ArticleList(props) {
  const {articles, isChildOpened, toggleChild} = props;

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



export default connect(({articles, filters}) => {
  const {date: {from, to}} = filters;



  const filteredArticles = articles.filter((article) => {
    if (!from) return true;
    const articleDate = Date.parse(article.date);


    if (!to) {
      return articleDate >= Date.parse(from);
    } else {
      return (articleDate >= Date.parse(from)) && (articleDate <= Date.parse(to));
    }
  });

  return {
    articles: filteredArticles
  };
})(accordion(ArticleList));