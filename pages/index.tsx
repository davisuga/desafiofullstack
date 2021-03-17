import React from "react";
import { Flex } from "@chakra-ui/react";
import { GET_QUESTIONS } from "../services/graphql/queries";
import SearchBox from "../components/SearchBox";
import QuestionList from "../components/QuestionList";
import useQuestions from "../hooks/useQuestions";

const Index: React.FC = () => {
  const { loading, getQuestions, questions, error } = useQuestions();
  console.log(questions);

  const handleSearch = (variables: GraphQlApiParams) => {
    console.log("searching... ");
    getQuestions(GET_QUESTIONS, variables);
    if (error) {
      console.log("Error: \n", error.graphQLErrors[0].extensions.code);

      throw new Error(error.graphQLErrors[0].extensions.code);
    }
  };

  return (
    <Flex>
      <SearchBox loading={loading} onSearch={handleSearch} />
      {!error && !loading && questions && (
        <QuestionList questions={questions} />
      )}
    </Flex>
  );
};

export default Index;
