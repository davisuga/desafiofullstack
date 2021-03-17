import React from "react";
import CustomBox from "../CustomBox";

// import { Container } from './styles';
type QuestionProps = { question: Item };
const Question = ({ question }: QuestionProps) => {
  return (
    <CustomBox>
      <h1>{question.title}</h1>
      <p>from {question.owner.display_name}</p>
    </CustomBox>
  );
};

export default Question;
