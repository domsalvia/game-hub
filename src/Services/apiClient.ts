import axios from "axios";
import apiSecrets from "./apiSecrets";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: apiSecrets.key
    }
});
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
