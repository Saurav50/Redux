import { useSelector, useDispatch } from "react-redux";
import { counterActionEvents } from "../Store";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(counterActionEvents.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActionEvents.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActionEvents.increase(10));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActionEvents.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {showCounter && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
