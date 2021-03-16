/**
 * @jest-environment node
 */

import gqlClient from "../../services/apollo";
import { GET_JS_QUESTIONS } from "../../services/graphql/queries";

describe("graphql endpoint", () => {
  it("get questions about javascript", async () => {
    const questions = await gqlClient.query({
      query: GET_JS_QUESTIONS,
    });
    expect(questions).toBeTruthy();
    console.log("Questions inside GQL: ", questions);
  });
});
