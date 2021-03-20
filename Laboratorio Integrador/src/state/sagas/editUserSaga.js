import {call, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {USERS_URL} from "../../api";
import {EDIT_FAIL, EDIT_USER} from "../types";
import {editSuccess, setError} from "../actions";

export function* editUserWorker(action) {
    try {
        yield call(
            axios.put,
            USERS_URL + action.id,
            action.data
        );
        yield put(editSuccess());
    } catch (e) {
        yield put(setError(EDIT_FAIL));
    }
}

export function* editUserSaga(){
    yield takeLatest(EDIT_USER, editUserWorker);
}