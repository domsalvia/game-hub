
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../Services/apiClient";
import { CACHE_KEY_PARENT_PLATFORMS } from "../data/constants";
import platforms from "../data/platforms";
import ms from 'ms';
import Platform from "../Entities/Platform";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
    useQuery({
      queryKey: CACHE_KEY_PARENT_PLATFORMS,
      queryFn:  apiClient.getAll,
      staleTime: ms('24h'),
      initialData: platforms
    });

export default usePlatforms;