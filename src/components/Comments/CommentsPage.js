import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import {connect} from 'react-redux';
import Loader from './../Loader';
import {NavLink} from 'react-router-dom';
import {checkAndLoadCommentsForPage} from './../../AC';



class CommentsPage extends Component {
  static propTypes = {
    page: PropTypes.string,
    // from connect
  }

  componentWillMount() {
    const {page, checkAndLoadCommentsForPage} = this.props;
    checkAndLoadCommentsForPage(page);
  }
  componentWillReceiveProps({page, checkAndLoadCommentsForPage}) {
    checkAndLoadCommentsForPage(page);
  }

  render() {
    const {total} = this.props;
    if (!total) return <Loader />

    return (
      <div>
        {this.getCommentItems()}
        {this.getPaginator()}
      </div>
    )
  }


  getCommentItems = () => {
    const {comments, loading} = this.props;
    if (loading || !comments) return <Loader />

    const commentItems = comments.map((id) => <li key={id}><Comment id={id} /></li>);
    return <ul>{commentItems}</ul>
  }

  getPaginator = () => {
    const {total} = this.props;
    const items = [];
    for (let i = 0; i <= Math.floor(total / 5) + 1; i++) {
      const number = i + 1;
      items.push(<li key = {number}><NavLink to = {`/comments/${number}`} activeStyle = {{color: 'green'}}>{number}</NavLink></li>);
    }

    return <ul>{items}</ul>
  }
}



export default connect((state, { page }) => {
  const {total, pagination} = state.comments;
  return {
    total,
    loading: pagination.getIn([page, 'loading']),
    comments: pagination.getIn([page, 'ids'])
  }
}, { checkAndLoadCommentsForPage })(CommentsPage);