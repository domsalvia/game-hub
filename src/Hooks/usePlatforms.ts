
import { FetchResponse } from "../Services/apiClient";
import apiClient from "../Services/apiClient";
import { CACHE_KEY_PARENT_PLATFORMS } from "../data/constants";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

// const usePlatforms =() => useData<Platform>('platforms/lists/parents');

const usePlatforms = () =>
    useQuery({
      queryKey: CACHE_KEY_PARENT_PLATFORMS,
      queryFn: () =>
        apiClient
          .get<FetchResponse<Platform>>("platforms/lists/parents")
          .then((res) => res.data),
      staleTime: (24*60*60*1000), //24h
      initialData: { count: platforms.length, results: platforms }
    });

export default usePlatforms;