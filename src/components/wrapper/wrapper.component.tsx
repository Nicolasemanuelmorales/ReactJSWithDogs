import { Grid } from '@material-ui/core';
import { generalStyles } from './wrapper.styles';

interface IwrapperProps {
  child: any;
}

export default function Wrapper(props: IwrapperProps) {
  const classes = generalStyles();
  const { child } = props;
  return <Grid className={classes.base}>{child}</Grid>;
}
