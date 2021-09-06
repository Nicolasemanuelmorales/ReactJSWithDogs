import React from 'react';
import { Grid } from '@material-ui/core';
import { generalStyles } from './favorite.styles';

export default function Favorite() {
  const classes = generalStyles();

  return (
    <Grid
      className={classes.base}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      Favorite
    </Grid>
  );
}
