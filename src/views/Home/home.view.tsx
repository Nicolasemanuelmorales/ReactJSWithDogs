import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Wrapper from "../../components/wrapper/wrapper.component";
import ReplayIcon from "@material-ui/icons/Replay";
import StarIcon from "@material-ui/icons/Star";
import { getRandomDog } from "../../services/homeService";
import Dog from "../../models/dog";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/reducers/rootReducer";
import favoritoAction from "../../redux/actions/FavoritoAction";

export default function Home() {
  const loader = useSelector((state: IRootState) => state.loader.value);
  const favoritos = useSelector((state: IRootState) => state.favoritos.value);
  const [imageRandom, setImageRandom] = useState<Dog>();
  const [alert, setAlert] = useState(false);

  const dispatch = useDispatch();

  const getDog = () => {
    getRandomDog().then((resp: Dog[]) => {
      setImageRandom(resp[0]);
      console.log(favoritos);
    });
  };
  // eslint-disable-next-line
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
                    onClick={() => {
                      // eslint-disable-next-line
                      setAlert(true),
                        imageRandom.url === undefined
                          ? null
                          : dispatch(
                              favoritoAction(
                                favoritos[0] === ""
                                  ? [imageRandom.url]
                                  : [...favoritos, imageRandom.url]
                              )
                            );
                    }}
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
