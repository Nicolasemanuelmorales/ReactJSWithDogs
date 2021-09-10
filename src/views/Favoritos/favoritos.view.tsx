import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { generalStyles } from "./favoritos.styles";
import Wrapper from "../../components/wrapper/wrapper.component";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/reducers/rootReducer";

export default function Favoritos() {
  const classes = generalStyles();
  const favoritos = useSelector((state: IRootState) => state.favoritos.value);

  return (
    <Wrapper
      child={
        favoritos[0] === "" ? (
          <Typography className={classes.empty}>
            No ha agregado ninguna imagen.
          </Typography>
        ) : (
          <Grid
            container
            justifyContent="flex-start"
            alignItems="center"
            className={classes.boxGeneral}
          >
            {favoritos.map((item, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  lg={2}
                  className={classes.boxImg}
                >
                  <Grid
                    style={{ backgroundImage: "url(" + item + ")" }}
                    className={classes.img}
                  />
                </Grid>
              );
            })}
          </Grid>
        )
      }
    />
  );
}
