import { axiosInstance as axios } from './axios';

/**
 * @description: 获取核心配置文件信息
 * @return { Promise }
 */
export const getCoreConfig = (): Promise<any> => {
  return axios.get('/getCoreConfig')
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    })
};