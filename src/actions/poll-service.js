import xhr from './slim-xhr'
import { setPollQuestions } from '../actions'
import { setPollResults } from '../actions'

const getQuestions = () => {
  var data = {
    eventKey: 'rwx',
    pollKey: 'pwa'
  }

  return xhr.post('/api/poll/questions-list', data)
  .then((res) => {
    console.log('poll list res:', res)
    if (res.responseData.errorMessage) {
      console.log('error getting questions list:', res);
      return {};
    }
    return res.responseData.questions;
  })
}

const getResults = () => {
  return getQuestions();
}

const pollService = {};

pollService.loadQuestions = (dispatch) => {
  dispatch({
    type: 'LOADING_POLL_QUESTIONS',
  })

  getQuestions()
  .then((result) => {
    console.log('poll questions result:', result)
    setTimeout(() => {
      dispatch(setPollQuestions(result))
    }, 500)
  })
}

pollService.loadResults = (dispatch) => {
  dispatch({
    type: 'LOADING_POLL_RESULTS',
  })

  getResults()
  .then((result) => {
    console.log('poll questions result:', result)
    setTimeout(() => {
      dispatch(setPollResults(result))
    }, 500)
  })
}

pollService.pickOption = (dispatch, question, option) => {
  // TODO hit pick option endpoint
  getResults()
  .then((result) => {
    console.log('poll questions result:', result)
    setTimeout(() => {
      dispatch(setPollResults(result))
    }, 500)
  })

  dispatch({
    type: 'PICK_OPTION',
    question,
    option,
  })
}

export default pollService;
