import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setActivePage } from '../../actions'
import './Results.css';

class Results extends Component {
  render() {
    let optionContent = (option) => {
      return <div className="option-result">
          <div>{option.text}</div>
        </div>
    }

    let questionContent = (question) => {
      return <div>
          <div>{question.text}</div>
          {question.options.map((option) =>
            optionContent(option)
          )}
        </div>
    }

    let mainContent = () => {
      if (this.props.pollResults.length) {
        return <results-content>
            <div>Here is the Results.</div>
            {this.props.pollResults.map((question) =>
              questionContent(question)
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
    }
  }
}

Results = connect(mapStateToProps, mapDispatchToProps)(Results)

export default Results;
