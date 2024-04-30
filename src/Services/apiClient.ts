import axios, { AxiosRequestConfig } from "axios";
import apiSecrets from "./apiSecrets";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstace = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiSecrets.key,
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig)  => {
    return axiosInstace
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data);
  }
}
export default ApiClient;
