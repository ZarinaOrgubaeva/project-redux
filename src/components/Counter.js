import classes from "./Counter.module.css";
import { calculatorActionsTypes } from "../store/caculator/calculatorReducer";
import { useDispatch, useSelector } from "react-redux";

const Calculator = () => {
  const result = useSelector((state) => state.calculator.result);
  console.log(result);
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch({type: calculatorActionsTypes.ADD, payload: 5 });
  };
  const subtractHandler = () => {
    dispatch({ type: calculatorActionsTypes.SUBCTRACT, payload: 10 });
  };
  const multiplyHandler = () => {
    dispatch({ type: calculatorActionsTypes.MULTIPLAY, payload: 2 });
  };
  const divideHandler = () => {
    dispatch({ type: calculatorActionsTypes.DIVIDE, payload: 4 });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Calculator</h1>
      <div className={classes.value}>Result : {result}</div>
      <button onClick={addHandler}>+5</button>
      <button onClick={subtractHandler}>-10</button>
      <button onClick={multiplyHandler}>*2</button>
      <button onClick={divideHandler}>/4</button>
    </main>
  );
};

export default Calculator;
