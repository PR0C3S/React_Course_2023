import { Grid, Typography } from "@mui/material";

function Error() {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} mt={15}>
      <Grid item xs={12} md={10}>
        <Typography
          variant={"h5"}
          textAlign={"center"}
          bgcolor={"error.main"}
          color={"white"}
          p={2}
          borderRadius={10}
        >
          💥There was an error fecthing questions.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Error;
