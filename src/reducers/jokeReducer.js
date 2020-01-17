import jokeService from '../services/jokeService'

const jokeReducer = (state='', action) => {
    switch (action.type) {
        case 'SET_JOKE':
            return action.data.value.joke
        default:
            return state
    }}

export const setJoke = (props) => {
    return async dispatch => {
        const newJoke = await jokeService.getRandom()
        dispatch({
      type: 'SET_JOKE',
      data: newJoke
        })
  }

}


export default jokeReducer