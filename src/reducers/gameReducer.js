// import gameService from '../services/jokeService'

const gameReducer = (state=null, action) => {
    switch (action.type) {
        case 'SET_STATUS':
            return action.data
        default:
            return state
    }}

export const setStatus = (props) => {
    return({
      type: 'SET_STATUS',
      data: props
    })
  }




export default gameReducer

// return async dispatch => {
//     const newStatus = await gameService.getStatus()
//     dispatch({})