import { Heading } from "@chakra-ui/react";
import usePlatformLookUp from "../Hooks/usePlatformLookUp";
import useGenreLookUp from "../Hooks/useGenreLookUp";
import useGameQueryStore from "../data/store";

const GameHeading = () => {
  const [ genreId, platformId ] = useGameQueryStore(s=> [s.gameQuery.genreId, s.gameQuery.platformId]);

  const genre = useGenreLookUp(genreId);
  const platform = usePlatformLookUp(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <Heading as="h1" marginY={5} fontSize={'5xl'}>{heading}</Heading>;
};

export default GameHeading;
