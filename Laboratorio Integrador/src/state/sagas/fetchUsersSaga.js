import {takeLatest,call, put} from "redux-saga/effects";
import {FETCH_FAIL, FETCH_USERS} from "../types";
import axios from "axios";
import {USERS_URL} from "../../api";
import {setError, setUsers} from "../actions";

export function* fetchUsers() {
    try {
        const response = yield call(
            axios.get,
            USERS_URL
        );
        yield put(setUsers(response.data));
    } catch (e) {
        yield put(setError(FETCH_FAIL));
    }
}

export function* fetchUsersSaga(){
    yield takeLatest(FETCH_USERS, fetchUsers);
}