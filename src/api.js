import axios from 'axios';

const api_URL = 'http://localhost:3200/api'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : api_URL,
});

export default api;
