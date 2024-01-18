import React from "react";
import { useQuiz } from "../contexts/QuizContext";
import { Button, Grid, Typography } from "@mui/material";

export default function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <Grid
      container
      mt={15}
      justifyContent={"center"}
      alignItems={"center"}
      rowSpacing={2}
    >
      <Grid item xs={12}>
        <Typography variant="h4" textAlign={"center"}>
          Welcome to the React Quiz!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" textAlign={"center"}>
          {numQuestions} question to test your React mastery
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          onClick={() => dispatch({ type: "start" })}
          fullWidth
        >
          <Typography variant="h5">Let's start</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
