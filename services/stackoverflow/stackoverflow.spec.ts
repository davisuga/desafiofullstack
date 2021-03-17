/**
 * @jest-environment node
 */

import getStackoverflowQuestions from ".";
describe("getStackoverflowQuestions", () => {
  it("get questions about javascript", async () => {
    const questions = await getStackoverflowQuestions({
      tags: "javascript",
      sort: "votes",
      limit: 12,
    });
    expect(questions).toBeTruthy();
    expect(questions.length).toBeLessThanOrEqual(12);
  });
});
