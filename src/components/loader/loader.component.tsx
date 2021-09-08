import { Backdrop, CircularProgress } from "@material-ui/core";

interface IProps {
  size: number;
  open: boolean;
  color: string;
}

export default function Loader(props: IProps) {
  const { open, color, size } = props;

  return (
    <Backdrop open={open} style={{ zIndex: 10 }}>
      <CircularProgress style={{ color: color }} value={size} />
    </Backdrop>
  );
}
