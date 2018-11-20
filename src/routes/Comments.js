import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CommentsPage from './../components/Comments/CommentsPage';



class Comments extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Все комментарии</h1>
        <Route path="/comments/:page" render={this.getCommentsPage} />
      </div>
    )
  }

  getCommentsPage = ({match}) => {
    const {page} = match.params;
    return <CommentsPage page = {page} />
  }
}



export default Comments;