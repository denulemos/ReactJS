import { SET_TODOS } from "./types";

export function todosReducer(state = [], action) {
  if (action.type === SET_TODOS) {
    return action.todos;
  }
  return state;
}
