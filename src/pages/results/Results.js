import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Result from './result/Result'
import { connect } from 'react-redux'
import { setActivePage } from '../../actions'
import pollService from '../../actions/poll-service'
import './Results.css';

class Results extends Component {
  componentWillMount() {
    // TODO polling logic to refresh results
    pollService.loadResults(this.props.dispatch);
  }

  render() {
    let questionContent = (question, index) => {
      return <div key={index}>
          <div>{question.text}</div>
          <div className="options-wrapper">
            {question.options.map((option, index) =>
              <Result question={question} option={option} key={index}/>
            )}
          </div>
        </div>
    }

    let mainContent = () => {
      if (this.props.pollResults.length) {
        return <results-content>
            <div>Here is the Results.</div>
            {this.props.pollResults.map((question, index) =>
              questionContent(question, index)
            )}
          </results-content>
      } else {
        return <div>Retrieving data...</div>
      }
    }

    return <div className="Results page-view">
      <div className="page-content">
        { mainContent() }
        <button onClick={this.props.gotoPoll}>View Poll</button>
      </div>
    </div>
  }
}

Results.propTypes = {
  gotoPoll: PropTypes.func.isRequired,
  pollResults: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return {
    pollResults: state.pollResults,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    gotoPoll: event => {
      dispatch(setActivePage('poll-page'))
    },
    dispatch
  }
}

Results = connect(mapStateToProps, mapDispatchToProps)(Results)

export default Results;
