import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../Services/apiClient";
import { CACHE_KEY_GAME } from "../data/constants";
import { GameDetails } from "../Entities/GameDetails";

const apiClient = new ApiClient<GameDetails>(`/games`);

const useGame = (slug: string) => {
  return useQuery({
    queryKey: [...CACHE_KEY_GAME, slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });
};

export default useGame;
