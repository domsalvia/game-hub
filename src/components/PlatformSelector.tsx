import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatformLookUp from "../Hooks/usePlatformLookUp";
import usePlatforms from "../Hooks/usePlatforms";
import useGameQueryStore from "../data/store";



const PlatformSelector = () => {
  const { gameQuery, setPlatform } = useGameQueryStore();
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatformLookUp(gameQuery.platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
