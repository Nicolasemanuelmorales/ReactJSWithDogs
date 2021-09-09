import { makeStyles } from "@material-ui/core/styles";
import colors from "../../assets/colors";

export const generalStyles = makeStyles((theme) => ({
  boxImg: {
    marginTop: 30,
    textAlign: "center",
    width: "100%",
    maxHeight: 350,
    minHeight: 350,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    maxHeight: 350,
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
    fontSize: 12,
    "&:hover": {
      backgroundColor: colors.COLOR_PRINCIPAL,
    },
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
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
