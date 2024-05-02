import { Spinner } from "@chakra-ui/react";
import useTrailers from "../Hooks/useTrailers";

interface Props {
  id: string;
}

const TrailerPlayer = ({ id }: Props) => {
  const { data: trailers, isLoading, error } = useTrailers(id);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const first = trailers?.results[0];
   null;

  return first ? (
    <div>
      <video
        controls
        src={first.data[480].toString()}
        poster={first.preview}
      />
    </div>
  ) : null;
};

export default TrailerPlayer;
