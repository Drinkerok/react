import React, {Component} from 'react';
import Calendar from './Calendar';
import ArticleList from './ArticleList';
import {articles} from './../fixtures';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: {
        from: null,
        to: null
      }
    }
  }

  render() {
    return (
      <div>
        <Calendar selectDate = {this.setDateRange} />
        <ArticleList articles = {articles} dateRange = {this.state.date} />
      </div>
    )
  }

  setDateRange = ({from, to}) => {
    this.setState({
      date: {
        from,
        to
      }
    })
  }
}



export default App;