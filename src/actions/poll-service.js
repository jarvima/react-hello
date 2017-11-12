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

const postOptionPick = (question, option, unpickOption) => {
  var data = {
    eventKey: 'rwx',
    pollKey: 'pwa',
    question: {
      index: question.key
    },
    pickOption: {
      index: option.key
    }
  }
  if (unpickOption) {
    data.unpickOption = {
      index: unpickOption.key
    }
  }

  return xhr.post('/api/poll/pick-option', data)
  .then((res) => {
    if (res.responseData.errorMessage) {
      console.log('error picking option:', res);
      return {};
    }
    return res.responseData.questions;
  })
}

const pollService = {};

pollService.loadQuestions = (dispatch) => {
  dispatch({
    type: 'LOADING_POLL_QUESTIONS',
  })

  getQuestions()
  .then((result) => {
    //setTimeout(() => {
      dispatch(setPollQuestions(result))
    //}, 500) // to test empty state
  })
}

pollService.loadResults = (dispatch) => {
  dispatch({
    type: 'LOADING_POLL_RESULTS',
  })

  getResults()
  .then((result) => {
    //setTimeout(() => {
      dispatch(setPollResults(result))
    //}, 500) // to test empty state
  })
}

pollService.pickOption = (dispatch, question, option) => {
  var unpickOption = null
  question.options.forEach((opt) => {
    if (opt.picked) {
      unpickOption = opt
    }
  })

  postOptionPick(question, option, unpickOption)
  .then((result) => {
    dispatch(setPollResults(result))
  })

  dispatch({
    type: 'PICK_OPTION',
    question,
    option,
    unpickOption,
  })
}

export default pollService;
