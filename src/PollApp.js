import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RenderIf from './elements/RenderIf'
import Poll from './pages/poll/Poll'
import Results from './pages/results/Results'
import PollService from './actions/PollService'

class PollApp extends Component {
  render() {
    return (
      <poll-app>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RenderIf test={this.props.activePage === 'poll-page'}>
          <Poll></Poll>
        </RenderIf>
        <RenderIf test={this.props.activePage === 'results-page'}>
          <Results></Results>
        </RenderIf>
        <PollService/>
      </poll-app>
    );
  }
}

PollApp.propTypes = {
  activePage: PropTypes.string.isRequired, 
}

const mapStateToProps = state => {
  return {
    activePage: state.activePage,
  }
}

const mapDispatchToProps = null

PollApp = connect(mapStateToProps, mapDispatchToProps)(PollApp)


export default PollApp;
