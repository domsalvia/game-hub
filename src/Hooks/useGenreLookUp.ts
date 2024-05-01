import useGenres from "./useGenres";

const useGenreLookUp = (id?: number) => {
  const { data } = useGenres();
  return data?.results.find((i) => i.id === id);
};

export default useGenreLookUp;
