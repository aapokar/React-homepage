

const notificationReducer = (state = '', action) => {

  switch (action.type) {
  case 'NEW_NOTIFICATION':
    return action.message
  case 'CLEAR':
    return ''
  default:
    return state
  }

}

export const newNotification = (message) => {
  return async dispatch => {
    dispatch({
      type: 'NEW_NOTIFICATION',
      message: ''
    })
    await dispatch({
      type: 'NEW_NOTIFICATION',
      message
    })
    // setTimeout(() => {
    //   dispatch({
    //     type: 'NEW_NOTIFICATION',
    //     message: ''
    //   })
    // },2000)
  }
}

export default notificationReducer