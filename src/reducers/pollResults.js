const pollResults = (state = [], action) => {
  switch (action.type) {
    case 'SET_POLL_RESULTS':
      return action.pollResults
    default:
      return state
  }
}

export default pollResults