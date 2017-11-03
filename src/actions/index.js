let nextTodoId = -1
if (nextTodoId) {
  nextTodoId++
}

export const setPollQuestions = pollQuestions => {
  return {
    type: 'SET_POLL_QUESTIONS',
    pollQuestions
  }
}
export const setPollResults = pollResults => {
  return {
    type: 'SET_POLL_RESULTS',
    pollResults
  }
}

export const setActivePage = activePage => {
  return {
    type: 'SET_ACTIVE_PAGE',
    activePage
  }
}
