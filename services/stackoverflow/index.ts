import api from "../axios";

export default async function getStackoverflowQuestions({
  score = -Infinity,
  sort = "activity",
  limit = 50,
  tags,
}: GraphQlApiParams) {
  try {
    const response = await api.get<QuestionResponse>("questions", {
      params: {
        tagged: tags,
        sort,
        pagesize: limit,
      },
    });
    const questions = response.data;
    const filteredQuestions = questions.items.filter(
      (question) => question.score >= score
    );
    return filteredQuestions;
  } catch (error) {
    console.dir(error);
    throw new Error(error?.data?.error_message);
  }
}
