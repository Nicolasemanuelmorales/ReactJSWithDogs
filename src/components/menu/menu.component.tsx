import { Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { generalStyles } from "./menu.styles";

interface IwrapperProps {
  child?: any;
}

export default function Menu(props: IwrapperProps) {
  const classes = generalStyles();
  const history = useHistory();
  return (
    <Grid className={classes.base}>
      <Button
        onClick={() => {
          history.push("favoritos");
        }}
        className={classes.base}
      >
        Favoritos
      </Button>
      <Button className={classes.base}>Home</Button>
    </Grid>
  );
}
