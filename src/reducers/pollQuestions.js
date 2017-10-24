const pollQuestions = (state = [], action) => {
  switch (action.type) {
    case 'SET_POLL_QUESTIONS':
      return action.pollQuestions
    default:
      return state
  }
}

export default pollQuestions