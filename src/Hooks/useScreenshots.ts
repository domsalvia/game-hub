import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../Services/apiClient";
import { CACHE_KEY_SCREENSHOTS } from "../data/constants";
import Screenshot from "../Entities/Screenshot";

const useScreenshots = (slug: string) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${slug}/screenshots`);

  return useQuery({
    queryKey: [...CACHE_KEY_SCREENSHOTS, slug],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useScreenshots;
