import { useEffect } from "react";
import Header from "./Header";
import MainComponent from "./MainComponent";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import { useQuiz } from "../contexts/QuizContext";
import { Grid } from "@mui/material";

export default function App() {
  const { status } = useQuiz();
  return (
    <div>
      <Header />
      <MainComponent>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Grid
                container
                mt={1}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid item xs={4} md={6}>
                  <Timer />
                </Grid>
                <Grid item xs={4} md={2}>
                  <NextButton />
                </Grid>
              </Grid>
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </MainComponent>
    </div>
  );
}
