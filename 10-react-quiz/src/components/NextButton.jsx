import React from "react";
import { useQuiz } from "../contexts/QuizContext";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function NextButton() {
  const { dispatch, answer, numQuestions, index } = useQuiz();
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <Button
        variant={"contained"}
        onClick={() => dispatch({ type: "nextQuestion" })}
        fullWidth
        endIcon={<ArrowForwardIosIcon />}
      >
        Next
      </Button>
    );

  if (index === numQuestions - 1)
    return (
      <Button
        variant={"contained"}
        fullWidth
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </Button>
    );
}
