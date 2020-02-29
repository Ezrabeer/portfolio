import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

export const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
});
