import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars }: Props) => {
  const [showAll, setShowAll] = useState(false);

  if (!children) return null;

  return (
    <Text>
      {showAll || !maxChars || children.length <= maxChars
        ? children
        : children.substring(0, maxChars) + "..."}
      {maxChars && children.length > maxChars && (
        <Button
          marginLeft={1}
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Less" : "More"}
        </Button>
      )}
    </Text>
  );
};

export default ExpandableText;
