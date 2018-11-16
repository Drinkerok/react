import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addComment} from './../../AC';

const InputSize = {
  NAME: {
    min: 5,
    max: 15
  },
  COMMENT: {
    min: 20,
    max: 50
  }
}


class CommentForm extends Component {
  static propTypes ={
    articleId: PropTypes.string.isRequired,
  }

  constructor() {
    super();
    this.state = {
      name: '',
      comment: ''
    }
  }

  render() {
    return (
      <form className="form">
        <p className="form__header">Добавить комментарий</p>
        <div className="form__input-wrapper">
          <label className="form__label">Имя</label>
          <input
            className = { `form__input ${this.getInputErrorClassName(`name`)}` }
            placeholder = { this.getInputPlaceholder(`name`) }
            name="name"
            value = {this.state.name}
            onInput = { this.setInputValue(`name`) } />
        </div>
        <div className="form__input-wrapper">
          <label className="form__label">Комментарий</label>
          <textarea
            className = { `form__input form__input--textarea ${this.getInputErrorClassName(`comment`)}` }
            placeholder = { this.getInputPlaceholder(`comment`) }
            name = "comment"
            value = {this.state.comment}
            onInput = { this.setInputValue(`comment`) } />
        </div>
        <div className="form__input-wrapper">
          <button
            className = {"form__submit"}
            disabled = {this.isSubmitDisabled()}
            onClick = {this.handleSubmit}
          >Отправить</button>
        </div>
      </form>
    )
  }

  isSubmitDisabled = () => {
    return !(this.isInputValueCorrect(`name`) && this.isInputValueCorrect(`comment`));
  }

  isInputValueCorrect = (type) => {
    const inputRange = InputSize[type.toUpperCase()];
    const valueLength = this.state[type].length;

    return (valueLength !== 0 && valueLength >= inputRange.min && valueLength <= inputRange.max);
  }

  getInputErrorClassName = (type) => this.isInputValueCorrect(type) ? `` : `form__input--error`;

  getInputPlaceholder = (type) => {
    const inputRange = InputSize[type.toUpperCase()];

    return `От ${inputRange.min} до ${inputRange.max} символов`;
  }

  setInputValue = (type) => (evt) => {
    this.setState({
      [type]: evt.target.value
    })
  }


  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.addComment({
      articleId: this.props.articleId,
      name: this.state.name,
      comment: this.state.comment,
    });
  }
}



export default connect(null, {addComment})(CommentForm);