import React, {Component} from 'react';
import {render} from 'react-dom';
import CommentsList from './CommentsList';

export default class Article extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isOpen: false;
  //   }
  // }

  state = {
    isOpen: false,
    commentsOpen: false,
  }



  render() {
    const {article} = this.props;

    return (
      <div className="article">
        <h2 className="article__header" onClick={this.toggleOpen}>{article.title}</h2>
        {this.getBody()}
        <div className="comments">
          <button className="comments__toggle" onClick={this.toggleComments}>{this.state.commentsOpen ? "Закрыть комментарии" : "Открыть комментарии"}</button>
          {this.state.commentsOpen ? <CommentsList comments={article.comments}></CommentsList> : null}
        </div>
      </div>
    )
  };



  getBody() {
    return this.state.isOpen && <div>{this.props.article.text}</div>
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  toggleComments = () => {
    this.setState({
      commentsOpen: !this.state.commentsOpen,
    })
  }
}