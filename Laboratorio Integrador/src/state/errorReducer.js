import {FETCH_FAIL} from "./types";

export function errorReducer(state = null, action) {
    switch (action.type) {
        case FETCH_FAIL:
            return true;
        default:
            return state
    }
}