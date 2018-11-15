import React, {Component} from 'react';
import Calendar from './Calendar';
import Articles from './Articles';
import store from './../store';
import {Provider} from 'react-redux';

class App extends Component {

  render() {
    return (
      <Provider store = {store} >
        <div>
          <Calendar />
          <Articles />
        </div>
      </Provider>
    )
  }
}



export default App;