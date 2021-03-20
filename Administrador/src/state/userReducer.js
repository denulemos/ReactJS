import {FETCH_SUCCESS} from "./types";

export function userReducer(state = [], action) {
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.users;

        default:
            return state;
    }
}