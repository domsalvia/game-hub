import { CACHE_KEY_GENRES } from "../data/constants";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../Services/apiClient";
import genres from "../data/genres";
import ms from 'ms';
import Genre from "../Entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres 
  });

export default useGenres;
