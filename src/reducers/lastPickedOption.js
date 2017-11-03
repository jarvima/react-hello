const lastPickedOption = (state = null, action) => {
  console.log('lastPickedOption reducer:', state, action)
  switch (action.type) {
    case 'PICK_OPTION':
      return action.option
    default:
      return state
  }
}

export default lastPickedOption
