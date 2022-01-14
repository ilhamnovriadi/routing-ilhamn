import * as counter from "./constants";

export const increment = (value) => {
  return {
    type: counter.INC,
    value,
  };
};

export const decrement = (value) => {
  return {
    type: counter.DEC,
    value,
  };
};

export const decrementWithChecking = (value) => {
  return (dispatch, getState) => {
    if (getState().counter.value > 0) {
      return dispatch(decrement(value));
    }
  };
};
