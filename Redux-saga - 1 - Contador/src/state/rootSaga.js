import { all } from "redux-saga/effects";

import { incrementAsyncWatcher } from "./sagas/watchIncrement";
import { decrementAsyncWatcher } from "./sagas/watchDecrement";

export function* rootSaga() {
  yield all([incrementAsyncWatcher(), decrementAsyncWatcher()]);
}
