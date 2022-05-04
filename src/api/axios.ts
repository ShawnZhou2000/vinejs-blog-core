import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const axiosInstance:AxiosInstance = axios.create({
  baseURL: `http://localhost:12321/`,
  headers: {
    Accept: "application/json",
  }
});

// axios实例拦截响应
// axiosInstance.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   // 请求失败
//   (error: any) => {
    
//   }
// );

// axios实例拦截请求
// axiosInstance.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
    
//   },
//   (error:any) => {
//     return Promise.reject(error);
//   }
// ) 