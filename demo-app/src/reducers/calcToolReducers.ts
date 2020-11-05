import { OpActions, ADD_ACTION, SUBTRACT_ACTION } from "../actions/calcToolActions";

export const calcToolReducer = (
  state: { result: number } = { result: 0 },
  action: OpActions
) => {

  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + action.payload.value,
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.payload.value,
      };
    default:
      return state;
  }
  
};
