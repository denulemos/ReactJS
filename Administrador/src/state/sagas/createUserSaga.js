import {call, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {USERS_URL} from "../../api";
import {CREATE_FAIL, CREATE_USER, EDIT_FAIL} from "../types";
import {createSuccess, editSuccess, setError} from "../actions";

export function* createUserWorker(action) {
    try {
        yield call(
            axios.post,
            USERS_URL,
            action.data
        );
        yield put(createSuccess());
    } catch (e) {
        yield put(setError(CREATE_FAIL));
    }
}

export function* createUserSaga(){
    yield takeLatest(CREATE_USER, createUserWorker);
}