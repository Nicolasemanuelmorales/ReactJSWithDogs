import { Button, Grid } from '@material-ui/core';
import { generalStyles } from './menu.styles';

interface IwrapperProps {
  child?: any;
}

export default function Menu(props: IwrapperProps) {
  const classes = generalStyles();
  return (
    <Grid className={classes.base}>
      <Button className={classes.base}>Home</Button>
      <Button className={classes.base}>Favoritos</Button>
    </Grid>
  );
}
