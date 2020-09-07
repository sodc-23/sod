import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '~reducers/index';

/**
 * LOGGER IN PROD FOR DEMO PAGES ONLY!
 *   > Remove this import and the middleware below before going live.
 *   > https://mikechabot.github.io/react-boilerplate/
 */
import logger from 'redux-logger';

/**
 * Production Redux store
 * @param  {object} initialState    Initial state of the Redux store
 * @return {object}                 Redux store
 */
export default function configureStore(initialState: any = {}) {
  return createStore(
    rootReducer,
    initialState,
    // applyMiddleware(thunk),     // USE ME IN PROD!
    applyMiddleware(thunk, logger) // DON'T USE ME IN PROD!
  );
}
