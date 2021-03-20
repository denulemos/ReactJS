import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import { FETCH_TODOS } from "../types";
import { setTodos, errorTodos } from "../actions";

function* fetchTodos() {
  try {
    const todos = yield call(
      axios.get,
      //"https://jsonplaceholder.typicode.com/todossss"
      "https://jsonplaceholder.typicode.com/todos"
    );
    yield put(setTodos(todos.data));
  } catch (e) {
    yield put(errorTodos(e));
  }
}

export function* fetchTodosSaga() {
  yield takeLatest(FETCH_TODOS, fetchTodos);
}
