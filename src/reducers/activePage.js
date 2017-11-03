const activePage = (state = 'poll-page', action) => {
  console.log('activePage reducer:', state, action)
  switch (action.type) {
    case 'SET_ACTIVE_PAGE':
      return action.activePage
    default:
      return state
  }
}

export default activePage
