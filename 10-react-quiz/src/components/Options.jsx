import React from "react";
import { useQuiz } from "../contexts/QuizContext";
import { Button, Grid } from "@mui/material";

export default function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;

  function handleClick(index) {
    if (!hasAnswered) dispatch({ type: "newAnswer", payload: index });
  }

  return (
    <Grid container mt={1} rowSpacing={1} justifyContent={"center"}>
      {question.options.map((option, index) => (
        <Grid item xs={8} key={option}>
          <Button
            fullWidth
            variant={"contained"}
            color={
              !hasAnswered
                ? "primary"
                : index === question.correctOption
                ? "success"
                : "error"
            }
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {option}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
