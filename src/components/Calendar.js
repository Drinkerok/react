import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.props.selectDate(range);
    this.setState(range);
  }
  handleResetClick() {
    this.setState(this.getInitialState());
  }



  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    return (
      <div>
        <p>
          {!from && !to && 'Выберите первый день.'}
          {from && !to && 'Выберите последний день.'}
          {from &&
            to &&
            `Выбрано с ${from.toLocaleDateString()} до
                ${to.toLocaleDateString()}`}{' '}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick.bind(this)}>
                Сбросить
              </button>
            )}
        </p>
        <DayPicker
          className = "Selectable"
          selectedDays = {[from, { from, to }]}
          modifiers = {modifiers}
          onDayClick = {this.handleDayClick.bind(this)}
        />
      </div>
    )
  }
}



export default Calendar;