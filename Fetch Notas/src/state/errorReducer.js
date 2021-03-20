import { ERROR_TODOS } from "./types";

export function errorReducer(state = null, { type, msg }) {
  if (type === ERROR_TODOS) {
    return msg;
  }
  return state;
}
