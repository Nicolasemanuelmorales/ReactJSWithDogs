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
          <Typography
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              display: "flex",
              fontWeight: 700,
            }}
          >
            No ha agregado ninguna imagen.
          </Typography>
        ) : (
          <Grid
            container
            justifyContent="flex-start"
            alignItems="center"
            style={{ marginTop: 50, paddingLeft: 12.5, paddingRight: 12.5 }}
          >
            {favoritos.map((item, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  style={{
                    textAlign: "center",
                    marginBottom: 25,
                    paddingLeft: 12.5,
                    paddingRight: 12.5,
                  }}
                >
                  <Grid
                    style={{
                      height: 200,
                      backgroundImage: "url(" + item + ")",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundColor: "black",
                    }}
                  ></Grid>
                </Grid>
              );
            })}
          </Grid>
        )
      }
    />
  );
}
