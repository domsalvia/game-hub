import { SimpleGrid, Text } from '@chakra-ui/react';
import Game from '../Entities/Game';
import CriticScore from './CriticScore';
import DefinitonItem from './DefinitonItem';

interface Props {
    game: Game;
}

const GameAttributes = ({game}:Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
          <DefinitonItem term="Platforms">
            {game?.parent_platforms.map(({ platform }) => (
              <Text key={platform.id}>{platform.name}</Text>
            ))}
          </DefinitonItem>
          <DefinitonItem term="Metascore">
            <CriticScore criticScore={game.metacritic} />
          </DefinitonItem>
          <DefinitonItem term="Genres">
            {game?.genres.map((genre) => (
              <Text key={genre.id}>{genre.name}</Text>
            ))}
          </DefinitonItem>
          <DefinitonItem term="Publishers">
            {game?.publishers.map((publisher) => (
              <Text key={publisher.id}>{publisher.name}</Text>
            ))}
          </DefinitonItem>
        </SimpleGrid>
  )
}

export default GameAttributes