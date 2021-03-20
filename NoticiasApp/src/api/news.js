import axios from "axios";

//Cambiar esta URL por la URL de mockapi o el servicio que se utilice
const URL = "http://5bd25dbbbded6100135c3065.mockapi.io/api/news";

export const getNews = () => {
    return axios.get(URL);
}

export const setNewsItemView = (id) => {
    return axios.put(URL + "/" + id, {
        id,
        seen: true
    });
}