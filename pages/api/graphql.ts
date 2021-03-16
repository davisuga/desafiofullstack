import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    questions(tag: String!, limit: Int, score: Int, sort: String): [Question!]!
  }
  type Owner {
    reputation: Int
    user_id: ID!
    user_type: String
    profile_image: String
    display_name: String!
    link: String!
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
      return [{ name: "Nextjs" }];
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
