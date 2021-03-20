import {all} from "redux-saga/effects";
import {fetchUsersSaga} from "./fetchUsersSaga";
import {createUserSaga} from "./createUserSaga";
import {fetchUserSaga} from "./fetchUserSaga";
import {editUserSaga} from "./editUserSaga";
import {deleteUserSaga} from "./deleteUserSaga";

export function* rootSaga() {
    yield all([
        fetchUsersSaga(),
        createUserSaga(),
        fetchUserSaga(),
        editUserSaga(),
        deleteUserSaga()
    ])
}