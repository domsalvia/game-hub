import { CACHE_KEY_GENRES } from "../data/constants";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../Services/apiClient";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: apiClient.getAll,
    staleTime: (24*60*60*1000), //24h
    initialData: { count: genres.length, results: genres }
  });

export default useGenres;
