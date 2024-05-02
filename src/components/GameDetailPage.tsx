import { useParams } from "react-router-dom";
import useGame from "../Hooks/useGame";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const params = useParams();
  const {data, isLoading, error} = useGame(params.slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <Box padding={5}>
      <Heading marginBottom={2}>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>      
    </Box>
  );
};

export default GameDetailPage;
