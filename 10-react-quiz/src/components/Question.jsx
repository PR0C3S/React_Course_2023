import React from "react";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";
import { Grid, Typography } from "@mui/material";

export default function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} mt={1}>
      <Grid item xs={8}>
        <Typography variant={"h4"} textAlign={"center"}>
          {question.question}
        </Typography>
      </Grid>
      <Options question={question} />
    </Grid>
  );
}
