import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../Hooks/useGame";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";
import TrailerPlayer from "./TrailerPlayer";
import Screenshots from "./Screenshots";

const GameDetailPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useGame(params.slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding="10px">
      <GridItem>
        <Heading marginBottom={2}>{data?.name}</Heading>
        <ExpandableText maxChars={300}>{data?.description_raw}</ExpandableText>
        <GameAttributes game={data} />
      </GridItem>
      <GridItem>
        <TrailerPlayer id={data.slug} />
        <Screenshots id={data.slug} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
