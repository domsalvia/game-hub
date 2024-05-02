import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../Services/apiClient";
import { CACHE_KEY_GAME } from "../data/constants";
import { Game } from "../Entities/Game";

const apiClient = new ApiClient<Game>(`/games`);

const useGame = (slug: string) => {
  return useQuery({
    queryKey: [...CACHE_KEY_GAME, slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });
};

export default useGame;
