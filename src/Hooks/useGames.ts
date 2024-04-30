import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../Services/apiClient";
import { CACHE_KEY_GAMES } from "../data/constants";
import apiClient from "../Services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("games",
          {
            params: {
              genres: gameQuery.genre?.id,
              parent_platforms: gameQuery.platform?.id,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
            },
          })
        .then((res) => res.data),
  });

  // useData<Game>(
  //   "games",
  //   {
  //     params: {
  //       genres: gameQuery.genre?.id,
  //       parent_platforms: gameQuery.platform?.id,
  //       ordering: gameQuery.sortOrder,
  //       search: gameQuery.searchText,
  //     },
  //   },
  //   [gameQuery]
  // );

export default useGames;
