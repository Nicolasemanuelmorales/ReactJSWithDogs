import { Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { generalStyles } from "./menu.styles";
import logo from "../../assets/dogHeader.png";
interface IwrapperProps {
  child?: any;
}

export default function Menu(props: IwrapperProps) {
  const classes = generalStyles();
  const history = useHistory();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      className={classes.base}
    >
      <Grid
        item
        xs={4}
        className={`${classes.boxButton} ${classes.containerLogo} ${classes.border}`}
      >
        <img src={logo} alt="hc" className={classes.logo} />
      </Grid>
      <Grid
        item
        xs={4}
        onClick={() => {
          history.push("home");
        }}
        className={`${classes.boxButton} ${classes.border}`}
      >
        <Typography children={"INICIO"} className={classes.text} />
      </Grid>
      <Grid
        item
        xs={4}
        onClick={() => {
          history.push("favoritos");
        }}
        className={classes.boxButton}
      >
        <Typography children={"FAVORITOS"} className={classes.text} />
      </Grid>
    </Grid>
  );
}
