// @flow
import { DEC, INC } from "./constants";

const initialState = {
  value: 0,
};

const CounterAction = (state = initialState, action) => {
  switch (action.type) {
    case DEC:
      return { ...state, value: state.value - action.value };
    case INC:
      return { ...state, value: state.value + action.value };
    default:
      return state;
  }
};

export default CounterAction;
