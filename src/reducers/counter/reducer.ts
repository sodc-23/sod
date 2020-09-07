export const INCREMENT_COUNTER = 'react-boilerplate/counter/INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'react-boilerplate/counter/DECREMENT_COUNTER';
export const RESET_COUNTER = 'react-boilerplate/counter/RESET_COUNTER';

const INITIAL_STATE = 0;

/**
 * Reducer for the management of the counter
 * @param state
 * @param action
 */
const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return state + 1;
    }
    case DECREMENT_COUNTER: {
      return state - 1;
    }
    case RESET_COUNTER: {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
