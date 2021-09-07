import { makeStyles } from "@material-ui/core/styles";

export const generalStyles = makeStyles((theme) => ({
  base: {
    backgroundColor: "#21c1d1",
  },
  boxButton: {
    textAlign: "center",
    height: 75,
    color: "#FFF",
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
    borderColor: "#FFF",
    borderStyle: "solid",
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
  },
}));
