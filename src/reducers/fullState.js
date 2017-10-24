import { combineReducers } from 'redux'
import activePage from './activePage'
import pollQuestions from './pollQuestions'
import pollResults from './pollResults'

const fullState = combineReducers({
  activePage,
  pollQuestions,
  pollResults
})

export default fullState