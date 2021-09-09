import { makeStyles } from "@material-ui/core/styles";

export const generalStyles = makeStyles((theme) => ({
  empty: {
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    display: "flex",
    fontWeight: 700,
  },
  boxImg: {
    textAlign: "center",
    marginBottom: 25,
    paddingLeft: 12.5,
    paddingRight: 12.5,
  },
  img: {
    height: 200,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "black",
  },
  boxGeneral: {
    marginTop: 50,
    paddingLeft: 12.5,
    paddingRight: 12.5,
  },
}));
