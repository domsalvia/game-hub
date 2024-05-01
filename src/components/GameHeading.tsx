import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatformLookUp from "../Hooks/usePlatformLookUp";
import useGenreLookUp from "../Hooks/useGenreLookUp";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenreLookUp(gameQuery.genreId);
  const platform = usePlatformLookUp(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <Heading as="h1" marginY={5} fontSize={'5xl'}>{heading}</Heading>;
};

export default GameHeading;
