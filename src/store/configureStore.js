import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from '../reducers/rootReducer'

export default function configureStore(history, preloadedState) {
  // thunkMiddleware is not useful here because we do not have async action
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, createLogger(), routerMiddleware(history))
  )
}
