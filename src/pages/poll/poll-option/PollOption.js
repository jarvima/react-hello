import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import pollService from '../../../actions/poll-service'
import CheckboxIcon from '../../../images/CheckboxIcon'
import './PollOption.css';

class PollOption extends Component {

  borderClass() {
    return 'poll-border' + (this.props.picked ? ' picked' : '');
  }

  pickOption() {
    return () => {
      pollService.pickOption(this.props.dispatch, this.props.question, this.props.option)
    }
  }

  render() {
    //console.log('PollOption render:', this)
    return <div className={this.borderClass()} onClick={this.pickOption()}>
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
  //console.log('PollOption: mapping state to props:', state, ownProps)
  return {
    option: state.pollQuestions[ownProps.question.key].options[ownProps.option.key],
    picked: state.pollQuestions[ownProps.question.key].options[ownProps.option.key].picked,
  }
}

const mapDispatchToProps = dispatch => {
  //console.log('PollOption: mapping dispatch to props:', this, arguments)
  return {

    dispatch
  }
}

PollOption = connect(mapStateToProps, mapDispatchToProps)(PollOption)


export default PollOption;
