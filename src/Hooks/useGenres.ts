import { CACHE_KEY_GENRES } from "../data/constants";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/apiClient";
import { FetchResponse } from "../Services/apiClient";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//const useGenres = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () =>
  useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("genres")
        .then((res) => res.data),
    staleTime: (24*60*60*1000), //24h
    initialData: { count: genres.length, results: genres }
  });

export default useGenres;
