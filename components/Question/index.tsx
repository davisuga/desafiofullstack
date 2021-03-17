import React from "react";
import Box from "../CustomBox";
import { Image, Text } from "@chakra-ui/react";
// import { Container } from './styles';
type QuestionProps = { question: Item };
const Question = ({ question }: QuestionProps) => {
  return (
    <Box variant="question">
      <Box variant="profile-image">
        <Image
          objectFit="scale-down"
          borderRadius="full"
          src={question.owner.profile_image}
          height="10"
        />
      </Box>
      <Box variant="question-content-wrapper">
        <Box variant="question-content">
          <Text fontWeight="bold">{question.owner.display_name}</Text>
          <h1>{question.title}</h1>
        </Box>
        <Box variant="question-info"></Box>
      </Box>
    </Box>
  );
};

export default Question;
