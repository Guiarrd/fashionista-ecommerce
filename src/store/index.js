import { createStore } from 'redux'

import appReducers from '../reducers'

const rootReducer = (state, action) => appReducers(state, action)

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store