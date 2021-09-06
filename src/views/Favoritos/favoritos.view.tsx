import React from "react";
import { Grid } from "@material-ui/core";
import { generalStyles } from "./favoritos.styles";

export default function Favoritos() {
  const classes = generalStyles();

  return (
    <Grid
      className={classes.base}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      Holanda
    </Grid>
  );
}
