import { DocumentNode } from "graphql";
import { useState, useEffect } from "react";
import client from "../services/apollo";

const useQuestions = (
  initialQuery?: DocumentNode,
  initialVariables?: GraphQlApiParams
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [questions, setQuestions] = useState([]);

  const getQuestions = async (
    query = initialQuery,
    variables = initialVariables
  ) => {
    setLoading(true);
    try {
      const results = await client.query<GraphQLApiResponse>({
        query,
        variables,
      });
      console.log(
        "usequestions got: ",
        results,
        " from: ",
        query,
        " variables: ",
        variables
      );
      setQuestions(results.data.questions);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { getQuestions, questions, loading, error };
};

export default useQuestions;
