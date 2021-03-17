import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import CustomBox from "../CustomBox";
import { FormControl, FormLabel } from "@chakra-ui/react";

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
    <CustomBox bg="#E6E6E6" flexDir="row">
      <h1>Buscar na API</h1>

      <FormControl isRequired>
        <FormLabel>Tags</FormLabel>

        <Input
          required
          value={tags}
          onChange={(event) => setTags(event.target.value)}
        />
      </FormControl>
      <FormLabel>Limit</FormLabel>
      <Input
        value={limit}
        onChange={(event) => setLimit(parseInt(event.target.value) || 0)}
      />
      <FormLabel>Score</FormLabel>
      <Input
        value={score}
        onChange={(event) => setScore(parseInt(event.target.value) || 0)}
      />

      <FormLabel>Sort</FormLabel>

      {/* @ts-ignore  */}
      <Select onChange={(event) => setSort(event.target.value)}>
        <option value="activity">activity</option>
        <option value="votes">votes</option>
        <option value="creation">creation</option>
        <option value="hot">hot</option>
        <option value="week">week</option>
        <option value="created">created</option>
      </Select>
      <Button
        isDisabled={tags.length < 1}
        isLoading={loading}
        colorScheme="green"
        onClick={handleSearch}
      >
        BUSCAR
      </Button>
    </CustomBox>
  );
}

export default SearchBox;
