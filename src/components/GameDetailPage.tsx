import { Box, Heading, Spinner } from "@chakra-ui/react";
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
    <>
      <Box padding={5}>
        <Heading marginBottom={2}>{data?.name}</Heading>
        <ExpandableText maxChars={300}>{data?.description_raw}</ExpandableText>
        <GameAttributes game={data} />
        <TrailerPlayer id={data.slug} />
        <Screenshots id={data.slug} />
      </Box>
    </>
  );
};

export default GameDetailPage;
