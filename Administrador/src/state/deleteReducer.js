import {DELETE_FAIL, DELETE_SUCCESS} from "./types";

export function deleteReducer(state = null, action) {
    switch (action.type) {
        case DELETE_SUCCESS:
            return true;
        case DELETE_FAIL:
            return false;
        default:
            return null;

    }
}