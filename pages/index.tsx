import React from "react";
import { Flex } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GET_JS_QUESTIONS } from "../services/graphql/queries";

const Index: React.FC = () => {
  const { error, loading, data } = useQuery<GraphQLApiResponse>(
    GET_JS_QUESTIONS
  );
  console.log(data);
  return (
    <Flex>
      {!error &&
        !loading &&
        data &&
        data.questions.map((question) => {
          return (
            <div>
              <div>{question.title}</div>
              <div>{question.score}</div>
              <div>{question.is_answered}</div>
              <div>{question.owner.display_name}</div>
            </div>
          );
        })}
    </Flex>
  );
};

export default Index;
