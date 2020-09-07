import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '~reducers/index';

/**
 * Development Redux store
 * @param  {object} initialState    Initial state of the Redux store
 * @return {object}                 Redux store
 */
export default function configureStore(initialState: any = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
}
