import { put, takeEvery } from "redux-saga/effects";

import { decrement } from "../actions";
import { DECREMENT_ASYNC } from "../types";

const delay = ms => new Promise(res => setTimeout(res, ms));

function* decrementAsync() {
  yield delay(1000);
  yield put(decrement());
}

export function* decrementAsyncWatcher() {
  yield takeEvery(DECREMENT_ASYNC, decrementAsync);
}
