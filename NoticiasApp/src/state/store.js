import {createStore, applyMiddleware} from "redux";
import {newsReducer} from "./reducer";
import {logger} from "./middlewares/loggers";
import {delay} from "./middlewares/delay";
import thunk from "redux-thunk";

export const store = createStore(newsReducer, {
    news: []
},
    applyMiddleware(/*logger, delay,*/ thunk));