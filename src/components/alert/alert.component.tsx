import { Snackbar, Typography } from "@material-ui/core";
import { generalStyles } from "./alert.styles";

interface IProps {
  close: () => void;
  open: boolean;
  message: string;
}

export default function Loader(props: IProps) {
  const { close, open, message } = props;
  const classes = generalStyles();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      ContentProps={{
        classes: {
          root: classes.root,
        },
      }}
      open={open}
      autoHideDuration={1500}
      onClose={close}
      message={message}
      action={
        <Typography className={classes.alert} onClick={close}>
          x
        </Typography>
      }
    />
  );
}
