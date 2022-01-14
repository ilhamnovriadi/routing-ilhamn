import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrementWithChecking,
} from "../app/Features/Counter/actions";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="counter-wrap">
        <div className="con-button">
          <button
            className={value > 0 ? "" : "button-off"}
            onClick={() => dispatch(decrementWithChecking(1))}
          >
            - 
          </button>
        </div>
        <div className="con-counter">
          <h1>{value}</h1>
        </div>
        <div className="con-button">
          <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
