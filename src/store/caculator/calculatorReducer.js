export const calculatorActionsTypes = {
  ADD: "ADD",
  SUBCTRACT: "SUBCTRACT",
  MULTIPLAY: "MULTIPLAY",
  DIVIDE: "DIVIDE",
};
const initialState = {
  result: 0,
};
 export const CalculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case calculatorActionsTypes.ADD:
      return {
        ...state,
        result: state.result + action.payload,
      };
    case calculatorActionsTypes.SUBCTRACT:
      return {
        ...state,
        result: state.result - action.payload,
      };
    case calculatorActionsTypes.MULTIPLAY:
      return {
        ...state,
        result: state.result * action.payload,
      };
    case calculatorActionsTypes.DIVIDE:
      return {
        ...state,
        result: state.result / action.payload,
      };
    default:
      return state;
  }
};

