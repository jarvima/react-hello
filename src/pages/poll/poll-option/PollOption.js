import React, { Component } from 'react';
import CheckboxIcon from '../../../images/CheckboxIcon'
import './PollOption.css';

class PollOption extends Component {
  render() {
    return (
      <div className="poll-option">
        <span className="select-option">
          <CheckboxIcon/>
        </span>
        <span className="option-text">{this.props.option.text}</span>
      </div>
    );
  }
}

export default PollOption;
