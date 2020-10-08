/**
 * API request and response middleware
 *
 * @version 1.0.0
 * @author [Kumaresan Periyasamy]
 */


import axios from 'axios';
import { AppConstants } from '../api/constants/Constant';

export const API = axios.create({
    baseURL: AppConstants.API_BASE_URL,
    responseType: AppConstants.API_RESPONSE_TYPE
});

API.interceptors.request.use(function (request) {
    // Do something before request is sent
    console.log("new request intercepted: ", request);
    return request;
}, function (error) {
    // Do something with request error
    console.log("new request error");
    return Promise.reject(error);
});

API.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response intercepted: ", response);
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("response error");
    return Promise.reject(error);
});

