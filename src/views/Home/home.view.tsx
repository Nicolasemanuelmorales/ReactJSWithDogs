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
import { generalStyles } from "./home.styles";
import Loader from "../../components/loader/loader.component";
import colors from "../../assets/colors";
import loaderAction from "../../redux/actions/LoaderAction";
import Alert from "../../components/alert/alert.component";

export default function Home() {
  const loader = useSelector((state: IRootState) => state.loader.value);
  const favoritos = useSelector((state: IRootState) => state.favoritos.value);
  const [imageRandom, setImageRandom] = useState<Dog>();
  const [alert, setAlert] = useState(false);
  const classes = generalStyles();
  const dispatch = useDispatch();

  const getDog = () => {
    dispatch(loaderAction(true));

    getRandomDog()
      .then((resp: Dog[]) => {
        setImageRandom(resp[0]);
        console.log(favoritos);
      })
      .finally(() => {
        setTimeout(() => dispatch(loaderAction(false)), 1000);
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
          <>
            <Grid container direction="column" alignContent="center">
              <Grid item xs={11} sm={8} md={4} className={classes.boxImg}>
                <img src={imageRandom.url} alt="dog" className={classes.img} />
              </Grid>
              <Grid item xs={11} sm={8} md={4} className={classes.boxButton}>
                <Grid container>
                  <Grid item xs={6} className={classes.boxReload}>
                    <Button
                      disableElevation
                      variant="contained"
                      className={classes.button}
                      startIcon={
                        <ReplayIcon style={{ width: 16, height: 16 }} />
                      }
                      onClick={getDog}
                    >
                      RECARGAR
                    </Button>
                  </Grid>
                  <Grid item xs={6} className={classes.boxFav}>
                    <Button
                      disableElevation
                      variant="contained"
                      disabled={
                        favoritos.filter((item) => item === imageRandom.url)
                          .length === 0
                          ? false
                          : true
                      }
                      className={classes.button}
                      startIcon={<StarIcon style={{ width: 16, height: 16 }} />}
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
                      FAVORITO
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Alert
              open={alert}
              close={() => setAlert(false)}
              message="Se agrego la imagen a favoritos!"
            />
            <Loader open={loader} size={50} color={colors.COLOR_PRINCIPAL} />
          </>
        )
      }
    />
  );
}
