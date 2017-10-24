import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setActivePage } from '../../actions'
import PollOption from './poll-option/PollOption'
import './Poll.css';

class Poll extends Component {
  render() {
    let questionContent = (question) => {
      return <div>
          <div>{question.text}</div>
          {question.options.map((option) =>
            <PollOption option={option}/>
          )}
        </div>
    }

    let mainContent = () => {
      if (this.props.pollQuestions.length) {
        return this.props.pollQuestions.map((question) =>
          questionContent(question)
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
  }
}

Poll = connect(mapStateToProps, mapDispatchToProps)(Poll)

export default Poll;
