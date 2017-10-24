import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setPollQuestions } from '../actions'
import { setPollResults } from '../actions'

const getQuestions = () => {
  return new Promise((resolve, reject) => {
    resolve([
      {_id: 1, text: 'Question one?', 
        options: [
          {text: 'Yes'},
          {text: 'No'},
        ]
      },
      {_id: 2, text: 'Question dos?',
        options: [
          {text: '1'},
          {text: '2'},
          {text: '3'},
          {text: '4'},
          {text: '5'},
        ]
      },
      {_id: 3, text: 'Question oxib?',
        options: [
          {text: 'Yes'},
          {text: 'No'},
        ]
      },
      {_id: 4, text: 'Question 4?',
        options: [
          {text: 'Never'},
          {text: 'Sometimes'},
          {text: 'Always'},
        ]
      },
      {_id: 5, text: 'Question 5?',
        options: [
          {text: 'Yes'},
          {text: 'No'},
        ]
      },
    ])
  })
}

const getResults = () => {
  return new Promise((resolve, reject) => {
    resolve([
      {_id: 1, text: 'Question one?', 
        options: [
          {text: 'Yes', picks: 8 },
          {text: 'No', picks: 2 },
        ]
      },
      {_id: 2, text: 'Question dos?',
        options: [
          {text: '1', picks: 7 },
          {text: '2', picks: 3 },
          {text: '3', picks: 6 },
          {text: '4', picks: 4 },
          {text: '5', picks: 5 },
        ]
      },
      {_id: 3, text: 'Question oxib?',
        options: [
          {text: 'Yes', picks: 3 },
          {text: 'No', picks: 2 },
        ]
      },
      {_id: 4, text: 'Question 4?',
        options: [
          {text: 'Never', picks: 1 },
          {text: 'Sometimes', picks: 9 },
          {text: 'Always', picks: 7 },
        ]
      },
      {_id: 5, text: 'Question 5?',
        options: [
          {text: 'Yes', picks: 4 },
          {text: 'No', picks: 6 },
        ]
      },
    ])
  })
}

class PollService extends Component {
  render() {
    const element = this
    if (!this.props.pollQuestions.length) {
      getQuestions()
      .then((result) => {
        console.log('poll questions result:', result)
        setTimeout(() => {
          element.props.setPollQuestions(result)
        }, 1500)
      })
      
      getResults()
      .then((result) => {
        console.log('poll results result:', result)
        setTimeout(() => {
          element.props.setPollResults(result)
        }, 6000)
      })
      
    }

    return null
  }
}

PollService.propTypes = {
  pollQuestions: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return {
    pollQuestions: state.pollQuestions,
    pollResults: state.pollResults
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setPollQuestions: pollQuestions => {
      dispatch(setPollQuestions(pollQuestions))
    },
    setPollResults: pollResults => {
      dispatch(setPollResults(pollResults))
    },
  }
}

PollService = connect(mapStateToProps, mapDispatchToProps)(PollService)

export default PollService;
