import React from 'react';
import {render} from 'react-dom';
import Article from './Article';

export default function ArticleList({articles}) {
  const elements = articles.map(article => <li key={article.id}><Article article={article}/></li>);

  return (
    <ul>
      {elements}
    </ul>
  )
}