import {call, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {USERS_URL} from "../../api";
import {DELETE_FAIL, DELETE_USER} from "../types";
import {delSuccess, setError} from "../actions";

export function* deleteUserWorker(action) {
    try {
        yield call(
            axios.delete,
            USERS_URL + action.id,
        );
        yield put(delSuccess());
    } catch (e) {
        yield put(setError(DELETE_FAIL));
    }
}

export function* deleteUserSaga(){
    yield takeLatest(DELETE_USER, deleteUserWorker);
}