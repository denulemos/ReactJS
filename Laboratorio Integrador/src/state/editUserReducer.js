import {FETCH__SINGLE_SUCCESS} from "./types";

export function editUserReducer(state = {}, action) {
    switch (action.type) {
        case FETCH__SINGLE_SUCCESS:
            return action.data
        default:
            return {};

    }
}