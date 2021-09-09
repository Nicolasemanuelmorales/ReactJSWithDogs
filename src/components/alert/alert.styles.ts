import { makeStyles } from "@material-ui/core/styles";
import colors from "../../assets/colors";

export const generalStyles = makeStyles((theme) => ({
  alert: {
    cursor: "pointer",
    marginRight: 10,
  },
  root: {
    backgroundColor: colors.COLOR_PRINCIPAL,
  },
}));
