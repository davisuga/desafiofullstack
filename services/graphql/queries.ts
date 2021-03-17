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
export const GET_QUESTIONS = gql`
  query Questions($tags: String!, $score: Int, $limit: Int, $sort: String) {
    questions(tags: $tags, limit: $limit, score: $score, sort: $sort) {
      tags
      title
      score
      is_answered
      owner {
        display_name
        link
        reputation
        profile_image
      }
    }
  }
`;
