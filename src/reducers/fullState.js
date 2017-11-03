import { combineReducers } from 'redux'
import activePage from './activePage'
import lastPickedOption from './lastPickedOption'
import pollQuestions from './pollQuestions'
import pollResults from './pollResults'

const fullState = combineReducers({
  activePage,
  lastPickedOption,
  pollQuestions,
  pollResults
})

export default fullState
