import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Trailer from "../Entities/Trailer";
import ApiClient from "../Services/apiClient";
import { CACHE_KEY_MOVIES } from "../data/constants";

const useTrailers = (slug: string) => {
  const apiClient = new ApiClient<Trailer>(`/games/${slug}/movies`);

  return useQuery({
    queryKey: [...CACHE_KEY_MOVIES, slug],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useTrailers;
