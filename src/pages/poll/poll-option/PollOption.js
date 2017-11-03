import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import pollService from '../../../actions/poll-service'
import CheckboxIcon from '../../../images/CheckboxIcon'
import './PollOption.css';

class PollOption extends Component {

  borderClass() {
    console.log('setting borderClass:', this.props.option)
    return 'poll-border' + (this.props.picked ? ' picked' : '');
  }

  dosomething() {
    return () => {
      this.props.option.picked = true
      pollService.pickOption(this.props.dispatch, this.props.question, this.props.option)
      this.setState();
      console.log('question.key, option.key:', this.props.question.key, this.props.option.key, this.props.option)
    }
  }

  render() {
    console.log('PollOption render:', this)
    return <div className={this.borderClass()} onClick={this.dosomething()}>
      <div className="poll-option">
        <span className="select-option">
          <CheckboxIcon/>
        </span>
        <span className="option-text">{this.props.option.text}</span>
      </div>
    </div>
  }
}

PollOption.propTypes = {
  option: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  console.log('PollOption: mapping state to props:', state, ownProps)
  return {
    option: state.pollQuestions[ownProps.question.key].options[ownProps.option.key],
    picked: state.pollQuestions[ownProps.question.key].options[ownProps.option.key].picked,
  }
}

const mapDispatchToProps = dispatch => {
  console.log('PollOption: mapping dispatch to props:', this, arguments)
  return {

    dispatch
  }
}

PollOption = connect(mapStateToProps, mapDispatchToProps)(PollOption)


export default PollOption;
