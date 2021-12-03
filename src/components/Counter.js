import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css';

const Counter = () => {
  const disptach = useDispatch();
  const counter = useSelector(state => state.counter);
  const incrementby2Handler = () => {
    disptach({ type: 'incrementby2'})
  }

  const decrementby2Handler = () => {
    disptach({ type: 'decrementby2'})
  }
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
        <button onClick={incrementby2Handler}>IncrementBy2</button>
        <button onClick={decrementby2Handler}>DecrementBy2</button><br></br>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
