import {CREATE_FAIL, CREATE_SUCCESS} from "./types";

export function createReducer(state = null, action) {
    switch (action.type) {
        case CREATE_SUCCESS:
            return true;
        case CREATE_FAIL:
            return false;
        default:
            return null;

    }
}