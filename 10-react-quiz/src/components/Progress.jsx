import React from "react";
import { useQuiz } from "../contexts/QuizContext";
import { Grid, Slider, Typography } from "@mui/material";

export default function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <header>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={10}>
          <Slider
            marks
            aria-label="Default"
            valueLabelDisplay="auto"
            max={numQuestions}
            value={index + Number(answer !== null)}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography variant={"h5"} textAlign={"left"}>
            Question <strong>{index + 1}</strong>/{numQuestions}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant={"h5"} textAlign={"right"}>
            <strong>{points}</strong>/{maxPossiblePoints} Points
          </Typography>
        </Grid>
      </Grid>
    </header>
  );
}
