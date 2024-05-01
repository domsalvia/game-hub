import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenre: (genreId: number) => void;
  setPlatform: (platformId: number) => void;
  setOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const defaultSort = "-release";

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: { sortOrder: defaultSort, searchText: "" },

  setSearchText: (searchText: string) =>
    set(() => ({
      gameQuery: { searchText, sortOrder: defaultSort },
    })),

  setGenre: (genreId: number) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId },
    })),
  setOrder: (sortOrder: string) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder },
    })),
  setPlatform: (platformId: number) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId },
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Game Query Store", useGameQueryStore);

export default useGameQueryStore;
