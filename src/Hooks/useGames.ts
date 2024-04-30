import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient, { FetchResponse } from "../Services/apiClient";
import { CACHE_KEY_GAMES } from "../data/constants";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: () => apiClient.getAll(
          {
            params: {
              genres: gameQuery.genre?.id,
              parent_platforms: gameQuery.platform?.id,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
            },
          })
  });

export default useGames;
