import { combineReducers } from 'redux';

import entities from '~reducers/entities/reducer';
import counter from '~reducers/counter/reducer';

const rootReducer = combineReducers({
  counter,
  entities,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
