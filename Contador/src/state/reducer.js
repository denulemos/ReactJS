import { INCREMENT, DECREMENT } from "./types";

export function counterReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}
