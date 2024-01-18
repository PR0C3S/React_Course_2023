import { CircularProgress, Grid, Typography } from "@mui/material";

export default function Loader() {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      spacing={1}
      mt={15}
    >
      <Grid item>
        <CircularProgress size={50} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"body1"} textAlign={"center"}>
          Loading questions...
        </Typography>
      </Grid>
    </Grid>
  );
}
