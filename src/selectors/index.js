import {createSelector} from 'reselect';

const filtersGetter = (state) => state.filters;
const articlesGetter = (state) => state.articles;
const commentsGetter = (state) => state.comments;
const idGetter = (state, props) => props.id;



export const filteredArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
  const {date: {from, to}} = filters;
  const filteredArticles = {};


  for (let articleId in articles) {
    const article = articles[articleId];

    if (!from) {
      filteredArticles[articleId] = article;
      continue;
    }

    const articleDate = Date.parse(article.date);

    if (articleDate < Date.parse(from)) continue;
    if (!!to && (articleDate > Date.parse(to))) continue;
    
    filteredArticles[articleId] = article;
  }

  return filteredArticles;

  // return articles.filter((article) => {
  //   if (!from) return true;
  //   const articleDate = Date.parse(article.date);

  //   if (!to) {
  //     return articleDate >= Date.parse(from);
  //   } else {
  //     return (articleDate >= Date.parse(from)) && (articleDate <= Date.parse(to));
  //   }
  // });
});


export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
  return comments[id];
});