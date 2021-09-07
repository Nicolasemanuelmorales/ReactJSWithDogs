import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Wrapper from "../../components/wrapper/wrapper.component";
import logo from "../../assets/dogHeader.png";
import ReplayIcon from "@material-ui/icons/Replay";
import StarIcon from "@material-ui/icons/Star";
import { getRandomDog } from "../../services/homeService";
import Dog from "../../models/dog";

export default function Home() {
  const [imageRandom, setImageRandom] = useState<Dog>();

  const getDog = () => {
    getRandomDog().then((resp: Dog[]) => {
      setImageRandom(resp[0]);
    });
  };

  useEffect(getDog, []);

  return (
    <Wrapper
      child={
        imageRandom === undefined ? (
          <></>
        ) : (
          <Grid container direction="column" alignContent="center">
            <Grid
              item
              xs={10}
              sm={6}
              style={{
                marginTop: 50,
                textAlign: "center",
                width: "100%",
                maxHeight: 400,
                minHeight: 400,
              }}
            >
              <img
                src={imageRandom.url}
                alt="hc"
                style={{
                  maxHeight: 400,
                  height: "auto",
                  width: "auto",
                  maxWidth: "100%",
                }}
              />
            </Grid>
            <Grid item xs={10} sm={6} style={{ width: "100%" }}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  style={{
                    height: 50,
                    marginTop: 30,
                    textAlign: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#21c1d1", color: "#FFF" }}
                    startIcon={<ReplayIcon />}
                    onClick={getDog}
                  >
                    Recargar
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    height: 50,
                    marginTop: 30,
                    textAlign: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#21c1d1", color: "#FFF" }}
                    startIcon={<StarIcon />}
                  >
                    Favoritos
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )
      }
    />
  );
}
