import {SET_NEWS, SET_NEWS_SEEN} from "./types";
import {getNews, setNewsItemView} from "../api/news";

export const setNews = (news = []) => {
    return {
        type: SET_NEWS,
        news
    }
}

export const setNewsSeen = (id, delay = 1000) => {
    return {
        type: SET_NEWS_SEEN,
        //delay: delay || false,
        id
    }
}

export const getHomePageNews = () => dispatch => {
    getNews().then(({data: news}) => dispatch(setNews(news)));
}

export const newsItemSeen = (id) => dispatch => {
    return setNewsItemView(id).then(() => {
        setTimeout(() => {
            dispatch(setNewsSeen(id, false));
        },1000)
    })
}