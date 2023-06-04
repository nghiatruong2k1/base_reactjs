import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.insecureHTTPParser = true;
axios.defaults.xsrfCookieName = 'token';
axios.defaults.xsrfHeaderName = 'token';
axios.defaults.baseURL = process.env.REACT_APP_BASE_API;

interface AxiosOptions {
  signal: AbortSignal;
}
export const Get = async (
  path: string | '',
  params: Object | {},
  option: AxiosOptions,
) => {
  return await axios.get(path, { ...option, params });
};
Object.defineProperty(Get, 'name', { enumerable: false, value: 'Get' });
export const Post = async (
  path: string | '',
  params: Object | {},
  option: AxiosOptions,
) => {
  return await axios.post(path, params, option);
};
Object.defineProperty(Post, 'name', { enumerable: false, value: 'Post' });
export const Put = async (
  path: string | '',
  params: Object | {},
  option: AxiosOptions,
) => {
  return await axios.put(path, params, option);
};
Object.defineProperty(Put, 'name', { enumerable: false, value: 'Put' });
export const Delete = async (
  path: string | '',
  params: Object | {},
  option: AxiosOptions,
) => {
  return await axios.delete(path, { ...option, data: params });
};
Object.defineProperty(Delete, 'name', { enumerable: false, value: 'Delete' });
