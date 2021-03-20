import {
    CREATE_SUCCESS,
    CREATE_USER, DELETE_SUCCESS,
    DELETE_USER,
    EDIT_SUCCESS,
    EDIT_USER, FETCH__SINGLE_SUCCESS,
    FETCH_SUCCESS,
    FETCH_USER,
    FETCH_USERS
} from "./types";

export function fetch() {
    return {
        type: FETCH_USERS
    }
}

export function setUsers(users) {
    return {
        type: FETCH_SUCCESS,
        users
    }
}

export function edit(id, data) {
    return {
        type: EDIT_USER,
        id,
        data
    }
}

export function editSuccess() {
    return {
        type: EDIT_SUCCESS
    }
}

export function create(data) {
    return {
        type: CREATE_USER,
        data
    }
}

export function createSuccess() {
    return {
        type: CREATE_SUCCESS
    }
}

export function del(id) {
    return {
        type: DELETE_USER,
        id
    }
}

export function delSuccess() {
    return {
        type: DELETE_SUCCESS
    }
}

export function setError(type) {
    return {
        type
    }
}

export function fetchUser(id) {
    return {
        type: FETCH_USER,
        id
    }
}

export function setUser(data) {
    return {
        type: FETCH__SINGLE_SUCCESS,
        data
    }
}