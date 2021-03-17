import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import Box from "../CustomBox";
import { FormControl, FormLabel, Text } from "@chakra-ui/react";

import { Select } from "@chakra-ui/react";

interface SearchBoxProps {
  onSearch: ({ tags, limit, score, sort }: GraphQlApiParams) => void;
  loading: boolean;
}

function SearchBox({ onSearch, loading }: SearchBoxProps) {
  const [tags, setTags] = useState("");
  const [limit, setLimit] = useState(1);
  const [score, setScore] = useState(0);
  const [sort, setSort] = useState<GraphQlApiParams["sort"]>("activity");

  const handleSearch = () => {
    onSearch({ tags, limit, score, sort });
  };

  return (
    <Box width={"100%"} p={3} bg="#E6E6E6" flexDir="row" borderRadius={5}>
      <Text variant="subtitle">Buscar na API</Text>
      <Box variant="flex-center" mb={2}>
        <FormControl mr={5} isRequired>
          <FormLabel>Tags</FormLabel>

          <Input
            required
            value={tags}
            onChange={(event) => setTags(event.target.value)}
          />
        </FormControl>
        <FormControl mr={5}>
          <FormLabel>Limit</FormLabel>
          <Input
            value={limit}
            onChange={(event) => setLimit(parseInt(event.target.value) || 0)}
          />
        </FormControl>
        <FormControl mr={5}>
          <FormLabel>Score</FormLabel>
          <Input
            value={score}
            onChange={(event) => setScore(parseInt(event.target.value) || 0)}
          />
        </FormControl>

        <FormControl mr={5}>
          <FormLabel>Sort</FormLabel>

          {/* @ts-ignore  */}
          <Select bg="white" onChange={(event) => setSort(event.target.value)}>
            <option value="activity">activity</option>
            <option value="votes">votes</option>
            <option value="creation">creation</option>
            <option value="hot">hot</option>
            <option value="week">week</option>
            <option value="created">created</option>
          </Select>
        </FormControl>
      </Box>
      <Button
        isDisabled={tags.length < 1}
        isLoading={loading}
        colorScheme="green"
        onClick={handleSearch}
      >
        BUSCAR
      </Button>
    </Box>
  );
}

export default SearchBox;
