import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css';

const Counter = () => {
  const disptach = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    disptach({ type: 'increment'})
  };
  const decrementHandler = () => {
    disptach({ type: 'decrement'})
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>IncrementBy2</button>
        <button onClick={decrementHandler}>DecrementBy2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
