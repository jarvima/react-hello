import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setActivePage } from '../../actions'
import pollService from '../../actions/poll-service'
import PollOption from './poll-option/PollOption'
import './Poll.css';

class Poll extends Component {
  componentWillMount() {
    if (!this.props.pollQuestions.length) {
      pollService.loadQuestions(this.props.dispatch);
    }
  }

  render() {
    let questionContent = (question, index) => {
      return <div className="poll-question" key={index}>
          <div className="poll-question-text">{question.text}</div>
          {question.options.map((option, index) =>
            <PollOption question={question} option={option} key={index}/>
          )}
        </div>
    }

    let mainContent = () => {
      if (this.props.pollQuestions.length) {
        return this.props.pollQuestions.map((question, index) =>
          questionContent(question, index)
        )
      } else {
        return <div>Retrieving data...</div>
      }
    }

    return <div className="Poll page-view">
        <div className="page-content">
          { mainContent() }
          <button onClick={this.props.gotoResults}>View Results</button>
        </div>
      </div>
  }
}

Poll.propTypes = {
  gotoResults: PropTypes.func.isRequired,
  pollQuestions: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return {
    pollQuestions: state.pollQuestions,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    gotoResults: event => {
      dispatch(setActivePage('results-page'))
    },
    dispatch
  }
}

Poll = connect(mapStateToProps, mapDispatchToProps)(Poll)

export default Poll;
