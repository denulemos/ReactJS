import {SET_NEWS, SET_NEWS_SEEN} from "./types";

export const newsReducer = (state, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                news: action.news
            }
        case SET_NEWS_SEEN:
            const newsList = [...state.news];
            newsList.find(item => item.id === action.id).seen = true;
            return {
                news: newsList
            }
        default: return state;
    }
}