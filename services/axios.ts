import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
interface ApiRequestConfig extends AxiosRequestConfig {
  params: StackoverflowApiParams;
}
interface Api extends AxiosInstance {
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: ApiRequestConfig
  ): Promise<R>;
}
const api = axios.create({
  baseURL: "http://api.stackexchange.com/2.2/",
  params: {
    site: "stackoverflow",
  },
}) as Api;

api.interceptors.response.use(function (config) {
  console.log("response url ", config.request.res.responseUrl);
  return config;
});
export default api;
