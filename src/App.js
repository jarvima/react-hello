import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import fullState from './reducers/fullState'
import PollApp from './PollApp'
import './App.css'

let store = createStore(fullState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PollApp></PollApp>
      </Provider>
    );
  }
}

export default App;
