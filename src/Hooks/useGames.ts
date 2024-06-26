import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../Services/apiClient";
import { CACHE_KEY_GAMES } from "../data/constants";
import useGameQueryStore from "../data/store";
import Game from "../Entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam || 1,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
}

export default useGames;
