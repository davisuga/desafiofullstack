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
  baseURL: "api.stackexchange.com/2.2/questions/",
}) as Api;
export default api;
