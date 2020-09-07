import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from '~reducers/counter/reducer';

export const incrementAction = () => ({ type: INCREMENT_COUNTER });
export const decrementAction = () => ({ type: DECREMENT_COUNTER });
export const resetAction = () => ({ type: RESET_COUNTER });
