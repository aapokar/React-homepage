import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import projectsReducer from './reducers/projectsReducer'
import jokeReducer from './reducers/jokeReducer'
import gameReducer from './reducers/gameReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  projects: projectsReducer,
  message: notificationReducer,
  joke: jokeReducer,
  score: gameReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store