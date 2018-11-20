import React, {Component} from 'react';
import Calendar from './Calendar';
import Articles from './../routes/Articles';
import NotFound from './../routes/NotFound';
import Comments from './../routes/Comments';
import store from './../store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Provider store = {store} >
        <Router>
          <div>
            <div>
              <p>Главное меню</p>
              <div><NavLink to="/calendar" activeStyle = {{ color: 'red' }}>Календарь</NavLink></div>
              <div><NavLink to="/articles" activeStyle = {{ color: 'red' }}>Статьи</NavLink></div>
              <div><NavLink to="/comments" activeStyle = {{ color: 'red' }}>Комментарии</NavLink></div>
            </div>
            <Switch>
              <Route path="/calendar" component = {Calendar} />
              <Route path="/articles" component = {Articles} />
              <Route path="/comments" component = {Comments} />
              <Route path="*" component = {NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}



export default App;