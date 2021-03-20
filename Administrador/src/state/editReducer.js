import {EDIT_FAIL, EDIT_SUCCESS} from "./types";

export function editReducer(state = null, action) {
    switch (action.type) {
        case EDIT_SUCCESS:
            return true;
        case EDIT_FAIL:
            return false;
        default:
            return null;

    }
}