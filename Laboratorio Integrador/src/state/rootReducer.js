import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {errorReducer} from "./errorReducer";
import {createReducer} from "./createReducer";
import {editUserReducer} from "./editUserReducer";
import {editReducer} from "./editReducer";
import {deleteReducer} from "./deleteReducer";

export const rootReducer = combineReducers({
    users: userReducer,
    error: errorReducer,
    createResult: createReducer,
    editUser: editUserReducer,
    editResult: editReducer,
    deleteResult: deleteReducer
})