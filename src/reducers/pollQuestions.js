const pollQuestions = (state = [], action) => {
  console.log('pollQuestions reducer:', state, action)
  switch (action.type) {
    case 'SET_POLL_QUESTIONS':
      return action.pollQuestions
    case 'PICK_OPTION':
      var question = state[action.question.key]
      var option = question.options[action.option.key]
      var unpickOption = null;
      question.options.forEach((option) => {
        if (option.picked) {
          unpickOption = option;
          option.picked = false;
        }
      })
      option.picked = true;
      return state
    default:
      return state
  }
}

export default pollQuestions
