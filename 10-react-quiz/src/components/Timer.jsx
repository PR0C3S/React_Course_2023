import React, { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";
import { Box, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export default function Timer() {
  const { dispatch, secondsremaining } = useQuiz();
  const mins = Math.floor(secondsremaining / 60);
  const seconds = secondsremaining % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <Box bgcolor={"primary"} color={"white"}>
      <Typography variant={"h6"}>
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </Typography>
    </Box>
  );
}
