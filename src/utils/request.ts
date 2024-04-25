import axios, { AxiosRequestConfig } from 'axios';
import { loading } from './app';
import { message } from 'antd';

export const instanceAxios = axios.create();

instanceAxios.defaults.baseURL = import.meta.env.VITE_API_ENPOINT;

instanceAxios.interceptors.response.use(
  (response) => {
    setTimeout(() => {
      loading.off();
    }, 300);
    return response;
  },
  (error) => {
    loading.off();
    message.error(error.response?.data?.messageVi ?? error.response?.data?.message ?? error.message);

    return Promise.reject(error);
  }
);

export default function request(options: AxiosRequestConfig, isFormData: boolean = false) {
  instanceAxios.defaults.headers.common['Content-Type'] = isFormData
    ? 'multipart/form-data'
    : 'application/json;charset=UTF-8';
  return instanceAxios(options);
}
