import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

//const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0"; //we'll get to why we need this later

//we are importing URL from the environmental variable file - it needs to start with VITE
// we keep it as a n environmental variable to make it easier to load and cahge the URL

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL //? import.meta.env.VITE_API_URL : apiUrl,
});
//above is an api object
//we adding an interceptor that adds relevant headers 
//we will use this api object to send requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN); //adding the token as a header IF we have a token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;