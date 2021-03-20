import { put, takeEvery } from "redux-saga/effects";

import { increment } from "../actions";
import { INCREMENT_ASYNC } from "../types";

const delay = ms => new Promise(res => setTimeout(res, ms));

function* incrementAsync() {
  yield delay(1000);
  yield put(increment());
}

export function* incrementAsyncWatcher() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}
