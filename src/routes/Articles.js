import React, {Component} from 'react';
import ArticleList from './../components/Articles/ArticleList';
import Article from './../components/Articles/Article';
import {Route} from 'react-router-dom';



class Articles extends Component {
  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles" render = {this.getTitle} exact />
        <Route path="/articles/:id" render = {this.getArticle} />
      </div>
    )
  }


  getTitle = () => {
    return <p>Выберите статью</p>
  }

  getArticle = ({ match }) => {
    const {id} = match.params;
    return <Article id = {id} key = {id} />
  }
}



export default Articles;