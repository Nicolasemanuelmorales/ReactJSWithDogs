import { makeStyles } from "@material-ui/core/styles";
import colors from "../../assets/colors";

export const generalStyles = makeStyles((theme) => ({
  base: {
    backgroundColor: colors.COLOR_PRINCIPAL,
  },
  boxButton: {
    textAlign: "center",
    height: 75,
    color: colors.BLANCO,
    paddingTop: 28,
    cursor: "pointer",
  },
  logo: {
    width: 55,
    height: 55,
  },
  containerLogo: {
    paddingTop: 10,
    cursor: "default",
  },
  border: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 3,
    borderColor: colors.BLANCO,
    borderStyle: "solid",
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
  },
  paper: {
    background: colors.COLOR_PRINCIPAL,
  },
  boxMenu: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    minWidth: 250,
    justifyContent: "flex-start",
  },
  img: {
    width: 40,
    height: 40,
  },
  titleMenu: {
    color: colors.BLANCO,
    fontSize: 14,
    fontWeight: "bold",
  },
  path: {
    fontSize: 20,
    marginLeft: 15,
  },
  divider: {
    backgroundColor: colors.DIVIDER,
  },
  listMenu: {
    paddingLeft: 15,
  },
  white: {
    color: colors.BLANCO,
  },
  listItem: {
    color: colors.BLANCO,
    fontSize: 14,
  },
  black: {
    backgroundColor: colors.COLOR_PRINCIPAL,
  },
}));
