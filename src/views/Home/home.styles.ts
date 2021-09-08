import { makeStyles } from "@material-ui/core/styles";
import colors from "../../assets/colors";

export const generalStyles = makeStyles((theme) => ({
  boxImg: {
    marginTop: 50,
    textAlign: "center",
    width: "100%",
    maxHeight: 400,
    minHeight: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    maxHeight: 400,
    height: "auto",
    width: "auto",
    maxWidth: "100%",
  },
  boxButton: {
    width: "100%",
  },
  boxReload: {
    height: 50,
    marginTop: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.COLOR_PRINCIPAL,
    color: colors.BLANCO,
  },
  buttonDisabled: {
    backgroundColor: colors.COLOR__PRINCIPAL_DISABLE,
    color: colors.BLANCO,
  },
  boxFav: {
    height: 50,
    marginTop: 30,
    textAlign: "center",
  },
}));
