import React, {Component} from 'react';
import './styles.css';

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
      </form>
    )
  }

  getInputErrorClassName = (type) => {
    const inputRange = InputSize[type.toUpperCase()];
    const valueLength = this.state[type].length

    return (valueLength !== 0 && (valueLength < inputRange.min || valueLength > inputRange.max))
            ? `form__input--error`
            : ``;
  }

  getInputPlaceholder = (type) => {
    const inputRange = InputSize[type.toUpperCase()];

    return `От ${inputRange.min} до ${inputRange.max} символов`;
  }

  setInputValue = (type) => (evt) => {
    this.setState({
      [type]: evt.target.value
    })
  }
}



export default CommentForm;