import { GridItem, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../Hooks/useScreenshots";

interface Props {
  id: string;
}

const Screenshots = ({ id }: Props) => {
  const { data, isLoading, error } = useScreenshots(id);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2 }}
      spacing={2}
      padding="10px"
    >
      {data?.results.map((screen, index) => (
          <Image key={index} src={screen.image} />
      ))}
    </SimpleGrid>
  );
};

export default Screenshots;
