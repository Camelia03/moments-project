import axios from "axios";

axios.defaults.baseURL = "https://taskmanager-drf-b69d1e663d17.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();