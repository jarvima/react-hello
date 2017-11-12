const pollQuestions = (state = [], action) => {
  //console.log('pollQuestions reducer:', state, action)
  switch (action.type) {
    case 'SET_POLL_QUESTIONS':
      return action.pollQuestions
    case 'PICK_OPTION':
      var question = state[action.question.key]
      question.options.forEach((opt) => {
        opt.picked = false
      })
      var option = question.options[action.option.key]
      option.picked = true
      return state
    default:
      return state
  }
}

export default pollQuestions
