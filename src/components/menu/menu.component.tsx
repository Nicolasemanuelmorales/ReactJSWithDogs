import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { generalStyles } from "./menu.styles";
import logo from "../../assets/images/dogHeader.png";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import StarIcon from "@material-ui/icons/Star";
import Divider from "@material-ui/core/Divider";
import {
  AppBar,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import colors from "../../assets/colors";

export default function Menu() {
  const classes = generalStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return width > 800 ? (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      className={classes.base}
    >
      <Grid
        item
        xs={4}
        className={`${classes.boxButton} ${classes.containerLogo} ${classes.border}`}
      >
        <img src={logo} alt="dog" className={classes.logo} />
      </Grid>
      <Grid
        item
        xs={4}
        onClick={() => history.push("home")}
        className={`${classes.boxButton} ${classes.border}`}
      >
        <Typography children={"INICIO"} className={classes.text} />
      </Grid>
      <Grid
        item
        xs={4}
        onClick={() => history.push("favoritos")}
        className={classes.boxButton}
      >
        <Typography children={"FAVORITOS"} className={classes.text} />
      </Grid>
    </Grid>
  ) : (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: colors.COLOR_PRINCIPAL }}
      >
        <Toolbar>
          <MenuIcon onClick={() => setOpen(true)} />
          <Typography
            className={classes.path}
            children={location.pathname === "/home" ? "Inicio" : "Favoritos"}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"left"}
        open={open}
        className={classes.paper}
        onClose={() => setOpen(false)}
      >
        <Grid container className={classes.boxMenu}>
          <Grid item xs={4}>
            <IconButton onClick={() => setOpen(!open)}>
              <img src={logo} alt="dog" className={classes.img} />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Typography className={classes.titleMenu}>
              React.JS With Dogs
            </Typography>
          </Grid>
        </Grid>
        <Divider style={{ backgroundColor: colors.DIVIDER }} />
        <List style={{ paddingLeft: 15 }}>
          <ListItem button onClick={() => history.push("home")}>
            <ListItemIcon>
              <HomeIcon className={classes.white} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.listItem} children={"Inicio"} />
              }
            />
          </ListItem>
          <ListItem button onClick={() => history.push("favoritos")}>
            <ListItemIcon>
              <StarIcon className={classes.white} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  className={classes.listItem}
                  children={"Favoritos"}
                />
              }
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
