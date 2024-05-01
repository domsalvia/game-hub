import usePlatforms from "./usePlatforms";

const usePlatformLookUp = (id?: number) => {
  return usePlatforms().data?.results.find((i) => i.id === id) || null;
}

export default usePlatformLookUp;
