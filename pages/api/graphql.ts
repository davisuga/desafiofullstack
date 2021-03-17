import { ApolloServer, gql } from "apollo-server-micro";
import getStackoverflowQuestions from "../../services/stackoverflow";
const typeDefs = gql`
  type Query {
    questions(tags: String!, limit: Int, score: Int, sort: String): [Question!]!
  }
  type Owner {
    reputation: Int
    user_id: ID!
    user_type: String
    profile_image: String
    display_name: String!
    link: String
  }
  type Question {
    score: Int!
    link: String!
    title: String!
    owner: Owner!
    question_id: ID!
    tags: [String!]!
    view_count: Int!
    answer_count: Int!
    creation_date: Date!
    last_edit_date: Date
    is_answered: Boolean!
    last_activity_date: Date!
  }
  scalar Date
`;

const resolvers = {
  Query: {
    questions(parent, args, context) {
      return getStackoverflowQuestions(args);
    },
  },

  Question: {
    tags: (parent) => parent.tags,
    owner: (parent) => parent.owner,
    is_answered: (parent) => parent.is_answered,
    view_count: (parent) => parent.view_count,
    answer_count: (parent) => parent.answer_count,
    score: (parent) => parent.score,
    last_activity_date: (parent) => parent.last_activity_date,
    creation_date: (parent) => parent.creation_date,
    last_edit_date: (parent) => parent.last_edit_date,
    question_id: (parent) => parent.question_id,
    link: (parent) => parent.link,
    title: (parent) => parent.title,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
