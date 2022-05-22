import { useSelector, useDispatch } from "react-redux";
import { counterAction} from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
  const disptach = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const incrementby2Handler = () => {
    disptach(counterAction.incrementby2(2));
  };

  const decrementby2Handler = () => {
    disptach(counterAction.decrementby2(2));
  };
  const incrementHandler = () => {
    disptach(counterAction.increment());
  };
  const decrementHandler = () => {
    disptach(counterAction.decrement(2));
  };

  const toggleCounterHandler = () => {
    disptach(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementby2Handler}>IncrementBy2</button>
        <button onClick={decrementby2Handler}>DecrementBy2</button>
        <br></br>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
