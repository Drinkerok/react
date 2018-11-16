import {createSelector} from 'reselect';
import {mapToArray} from './../utils';

const filtersGetter = (state) => state.filters;
const articlesGetter = (state) => state.articles;
const commentsGetter = (state) => state.comments;
const idGetter = (state, props) => props.id;



export const filteredArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
  const {date: {from, to}} = filters;

  return mapToArray(articles).filter((article) => {
    if (!from) return true;
    const articleDate = Date.parse(article.date);

    if (!to) {
      return articleDate >= Date.parse(from);
    } else {
      return (articleDate >= Date.parse(from)) && (articleDate <= Date.parse(to));
    }
  });
});


export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
  return comments[id];
});