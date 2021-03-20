import { FETCH_TODOS, SET_TODOS, ERROR_TODOS } from "./types";

export function fetchTodos() {
  return {
    type: FETCH_TODOS
  };
}

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    todos
  };
}

export function errorTodos(msg) {
  return {
    type: ERROR_TODOS,
    msg
  };
}
