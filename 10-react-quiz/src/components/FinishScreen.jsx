import React from "react";
import { useQuiz } from "../contexts/QuizContext";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import confetti from "canvas-confetti";

export default function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙂";
  if (percentage > 0 && percentage < 50) emoji = "🙃";
  if (percentage === 0) emoji = "🤦‍♂️";
  if (percentage >= 80) confetti();
  return (
    <Grid
      container
      justifyContent={"center"}
      alignContent={"center"}
      rowSpacing={1}
      mt={15}
    >
      <Grid item xs={12} md={10}>
        <Typography
          variant={"h5"}
          textAlign={"center"}
          bgcolor={"primary.main"}
          color={"white"}
          p={2}
          borderRadius={10}
        >
          {emoji}You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
          ({Math.ceil(percentage)}%)
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"h6"} textAlign={"center"} mt={1}>
          (Highscore: {highscore} points)
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          onClick={() => dispatch({ type: "restart" })}
          startIcon={<RestartAltIcon />}
          size={"large"}
          fullWidth
        >
          <Typography variant="h5"> Restart quiz</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
