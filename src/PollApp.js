import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RenderIf from './elements/RenderIf'
import Poll from './pages/poll/Poll'
import Results from './pages/results/Results'

class PollApp extends Component {
  render() {
    return (
      <poll-app>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RenderIf test={this.props.activePage2 === 'poll-page'}>
          <Poll></Poll>
        </RenderIf>
        <RenderIf test={this.props.activePage2 === 'results-page'}>
          <Results></Results>
        </RenderIf>
      </poll-app>
    );
  }
}

PollApp.propTypes = {
  activePage2: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
  //console.log('PollApp mapStateToProps:', state)
  return {
    activePage2: state.activePage,
  }
}

const mapDispatchToProps = null

PollApp = connect(mapStateToProps, mapDispatchToProps)(PollApp)


export default PollApp;
