import axios from "axios";

const laravelApi = axios.create({
    baseURL: process.env.MIX_APP_API
});


export default laravelApi;
