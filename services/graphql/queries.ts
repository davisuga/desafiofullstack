import { gql } from "@apollo/client";

export const GET_JS_QUESTIONS = gql`
  query JSQuestions {
    questions(tags: "js", limit: 50) {
      tags
      title
      score
      is_answered
      owner {
        display_name
        reputation
      }
    }
  }
`;
