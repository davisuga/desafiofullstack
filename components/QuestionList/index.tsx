import React from "react";
import CustomBox from "../CustomBox";
import Question from "../Question";
type QuestionListProps = {
  questions: Item[];
};
const QuestionList = ({ questions }: QuestionListProps) => {
  return (
    <CustomBox display="flex" flexDir="column" alignItems="stretch">
      {questions.map((question) => (
        <Question question={question} />
      ))}
    </CustomBox>
  );
};

export default QuestionList;
