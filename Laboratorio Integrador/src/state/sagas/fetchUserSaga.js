import {takeLatest,call, put} from "redux-saga/effects";
import {FETCH_SINGLE_FAIL, FETCH_USER} from "../types";
import axios from "axios";
import {USERS_URL} from "../../api";
import {setError, setUser} from "../actions";

export function* fetchUser(action) {
    try {
        const response = yield call(
            axios.get,
            USERS_URL + action.id
        );
        yield put(setUser(response.data));
    } catch (e) {
        yield put(setError(FETCH_SINGLE_FAIL));
    }
}

export function* fetchUserSaga(){
    yield takeLatest(FETCH_USER, fetchUser);
}