import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { todosReducer } from "./todosReducer";
import { errorReducer } from "./errorReducer";

import { fetchTodosSaga } from "./sagas/fetchTodosSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    todos: todosReducer,
    error: errorReducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(fetchTodosSaga);
