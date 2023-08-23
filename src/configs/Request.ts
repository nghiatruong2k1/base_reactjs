import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
// axios.defaults.withCredentials = true;
// axios.defaults.insecureHTTPParser = true;
// axios.defaults.timeout = 3000;
axios.defaults.xsrfCookieName = 'token';
axios.defaults.xsrfHeaderName = 'token';
axios.defaults.baseURL = process.env.REACT_APP_BASE_API;

axios.interceptors.request.use(
  (config) => {
    const url = axios.getUri({
      method: config.method,
      url: config.url,
      params: config.params,
    });
    console.log(`%c[START ${config.method}]: ${url}`, 'color:#00aefd', config);
    return config;
  },
  (error) => {
    const url = axios.getUri({
      method: error.config.method,
      url: error.config.url,
      params: error.config.params,
    });
    if (error.code === 'ERR_CANCELED') {
      console.warn(
        `%c[CANCEL ${error.config.method}]: ${url}`,
        'color:#f36805',
        error,
      );
    } else {
      console.error(
        `%c[ERROR ${error.config.method}]: ${url}`,
        'color:#ff0400',
        error,
      );
    }
    return Promise.reject(error);
  },
);
axios.interceptors.response.use(
  (response) => {
    const url = axios.getUri({
      method: response.config.method,
      url: response.config.url,
      params: response.config.params,
    });
    console.log(
      `%c[response ${response.config.method}]: ${url}`,
      'color:#00b517',
      response,
    );
    return response;
  },
  (error) => {
    const url = axios.getUri({
      method: error.config.method,
      url: error.config.url,
      params: error.config.params,
    });
    if (error.code === 'ERR_CANCELED') {
      console.warn(
        `%c[CANCEL ${error.config.method}]: ${url}`,
        'color:#f36805',
        error,
      );
    } else {
      console.error(
        `%c[ERROR ${error.config.method}]: ${url}`,
        'color:#ff0400',
        error,
      );
    }
    return Promise.reject(error);
  },
);
function getMesage(message, code) {
  if (message.indexOf('Network Error') > -1) {
    return `Kiểm tra lại kết nối mạng!${
      (code && ' (Mã lỗi: ' + code + ')') || ''
    }`;
  }
  if (message.indexOf('Request failed') > -1) {
    return `Yêu cầu bị lỗi!${(code && ' (Mã lỗi: ' + code + ')') || ''}`;
  }
  if (message.indexOf('A connection was successfully') > -1) {
    return `Kết nối Database không thành công!${
      (code && ' (Mã lỗi: ' + code + ')') || ''
    }`;
  }
  if (message.indexOf('The remote certificate was rejected') > -1) {
    return `Kết nối Database bị từ chối!${
      (code && ' (Mã lỗi: ' + code + ')') || ''
    }`;
  }
  return message;
}
export interface AxiosFace {
  get: Function;
  post: Function;
  put: Function;
  delete: Function;
}
export interface AxiosOptions {
  signal: AbortSignal;
}
class Axios implements AxiosFace {
  get = async <T>(
    path: string | '',
    params: Object | {},
    option: AxiosOptions,
  ) => {
    return await axios.get<T>(path, { ...option, params });
  };
  post = async <T>(
    path: string | '',
    params: Object | {},
    option: AxiosOptions,
  ) => {
    return await axios.post<T>(path, params, option);
  };
  put = async <T>(
    path: string | '',
    params: Object | {},
    option: AxiosOptions,
  ) => {
    return await axios.put<T>(path, params, option);
  };
  delete = async <T>(
    path: string | '',
    params: Object | {},
    option: AxiosOptions,
  ) => {
    return await axios.delete<T>(path, { ...option, data: params });
  };
}
const Request = new Axios();
export default Request;
