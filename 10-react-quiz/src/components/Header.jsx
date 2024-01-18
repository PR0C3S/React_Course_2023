import { Grid, Typography } from "@mui/material";
import reactLogo from "../assets/react.svg";
function Header() {
  return (
    <header>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item>
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            height={100}
          />
        </Grid>
        <Grid item>
          <Typography variant="h3" fontFamily={"monospace"}>
            THE REACT QUIZ
          </Typography>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
