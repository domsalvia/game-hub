import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms from "../Hooks/usePlatforms";
import useGenres from "../Hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const {data: platforms} = usePlatforms();
  const {data: genres} = useGenres();

  const platformName = (platforms.results.find((i) => i.id === gameQuery.platformId))?.name || "";
  const genreName = (genres.results.find((i) => i.id === gameQuery.genreId))?.name || "";
  const heading = `${platformName} ${genreName || ""} Games`;

  return <Heading as="h1" marginY={5} fontSize={'5xl'}>{heading}</Heading>;
};

export default GameHeading;
