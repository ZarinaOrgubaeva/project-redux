import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth/authReducer";
import { CalculatorReducer } from "./caculator/calculatorReducer";

const rootReducer = combineReducers({
  calculator: CalculatorReducer,
  auth: authReducer,
})


export const store = createStore(rootReducer);
