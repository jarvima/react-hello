const activePage = (state = 'poll-page', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_PAGE':
      return action.activePage
    default:
      return state
  }
}

export default activePage