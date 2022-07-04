/*
 * @Author: lh@metgs.com
 * @Date: 2020-08-24 09:19:04
 * @LastEditors: sun@metgs.com
 * @LastEditTime: 2022-06-03 03:06:16
 * @Description: axios封装
 */
import axios from 'axios';

// import * as cookies from '@/assets/js/cookie';
import qs from 'qs';
import 'element-plus/es/components/message/style/css';
import { ElMessage } from 'element-plus';

const service = axios.create({
  // baseURL: process.env.VITE_APP_API_BASE,
  baseURL: import.meta.env.VITE_APP_API_BASE,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest (params) {
    // return qs.stringify({ token: cookies.getToken(), ...params });
    return qs.stringify({ ...params });
  },
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 40000, // request timeout
});

service.interceptors.request.use((config) => {
  return config;
});

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */
  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const responseType = response.request.responseType;
    if (responseType === 'arraybuffer') {
      return response.data;
    } else {
      const res = response.data;
      // console.log(+res.status)
      // if the custom code is not 20000, it is judged as an error.
      if (res.code && res.code !== 0 && +res.status !== 1) {
        // 跳过登录token过期 跳出提示框
        // 判断放至router拦截器中
        // 否则会导致初次进入和验证失败都弹出提示框
        if (+res.code !== 2003) {
          ElMessage({
            showClose: true,
            message: res.message || '系统错误',
            type: 'error',
            duration: 4 * 1000,
          });
        }
        return Promise.reject(new Error(res.message || '系统错误'));
      } else {
        return res.data || res.regeocode || res;
      }
    }
  },
  (error) => {
    if (!axios.isCancel(error)) {
      ElMessage({
        showClose: true,
        message: '网络请求失败' || error.message,
        type: 'error',
        duration: 4 * 1000,
      });
    }
    return Promise.reject(error);
  }
);



export default service;
