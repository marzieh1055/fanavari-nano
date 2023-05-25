// ***** use for set token in headers request to api ******
//                     ************
import axios from 'axios';
import { json } from 'react-router-dom';
const baseURL = "https://panel.frzddev.ir";

const Bearertoken = localStorage.getItem("token");

// add auth header with jwt if account is logged in and request is to the api url
// const isApiUrl = request.url.startsWith(baseURL);

const Axios = axios.create({
    baseURL,
    // timeout: 15000,
    headers: {

        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3BhbmVsLmZyemRkZXYuaXIvYXBpL3YxL3JlZ2lzdGVyIiwiaWF0IjoxNjg0Njk3ODIwLCJleHAiOjE2ODQ3MDE0MjAsIm5iZiI6MTY4NDY5NzgyMCwianRpIjoiRjljQ2U2MDNqWVBENW5YbyIsInN1YiI6IjI3IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9._6ssn7NnqPWQmMcAtjLzJxpXjIOi2wg1Db_y-izejuw"

    }
});

Axios.interceptors.request.use(async (config) => {
    const token = await localStorage.getItem('token');
    const isLoggedIn = token ? true : false;
    config.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // add auth header with jwt if account is logged in and request is to the api url
        ...(isLoggedIn && {
            Authorization: `Bearer ${JSON.parse(token)}`
        })
    }
    return config
}, error => Promise.reject(error))

Axios.interceptors.response.use(undefined, (response) => {

    // if token expired
    if (response.response.status === 401) {
        alert("توکن شما منقضی شده، نیاز است تا مجددا وارد شوید!")
        localStorage.clear();
        window.location.href = '/login';
    }

    return Promise.reject(response);
})

export default Axios;