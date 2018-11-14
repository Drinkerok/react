import React, {Component} from 'react';
import './form.css';

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
            className = "form__input"
            placeholder = {`От ${InputSize.NAME.min} до ${InputSize.NAME.max} символов`}
            name="name"
            value = {this.state.name}
            onInput = { this.handlerInputName } />
        </div>
        <div className="form__input-wrapper">
          <label className="form__label">Комментарий</label>
          <textarea
            className = "form__input form__input--textarea"
            placeholder = {`От ${InputSize.COMMENT.min} до ${InputSize.COMMENT.max} символов`}
            name = "comment"
            value = {this.state.comment}
            onInput = { this.handlerInputComment } />
        </div>
      </form>
    )
  }


  handlerInputName = (evt) => {
    this.setState({
      name: evt.target.value
    });

    if (this.state.name.length < InputSize.NAME.min || this.state.name.length > InputSize.NAME.max) {
      evt.target.classList.add('form__input--error')
    } else {
      evt.target.classList.remove ('form__input--error')
    }
  }
  handlerInputComment = (evt) => {
    this.setState({
      comment: evt.target.value
    })

    if (this.state.comment.length < InputSize.COMMENT.min || this.state.comment.length > InputSize.COMMENT.max) {
      evt.target.classList.add('form__input--error')
    } else {
      evt.target.classList.remove ('form__input--error')
    }
  }
}



export default CommentForm;