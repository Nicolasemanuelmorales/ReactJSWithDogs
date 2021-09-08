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
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      className={classes.base}
    >
      <Grid
        item
        xs={4}
        className={`${classes.boxButton} ${classes.containerLogo} ${classes.border}`}
      >
        <img src={logo} alt="hc" className={classes.logo} />
      </Grid>
      <Grid
        item
        xs={4}
        onClick={() => {
          history.push("home");
        }}
        className={`${classes.boxButton} ${classes.border}`}
      >
        <Typography children={"INICIO"} className={classes.text} />
      </Grid>
      <Grid
        item
        xs={4}
        onClick={() => {
          history.push("favoritos");
        }}
        className={classes.boxButton}
      >
        <Typography children={"FAVORITOS"} className={classes.text} />
      </Grid>
    </Grid>
  ) : (
    <>
      <AppBar position="static" style={{ backgroundColor: "#000" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          {location.pathname === "/home" ? "Inicio" : "Favoritos"}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"left"}
        open={open}
        classes={{ paper: classes.paper }}
        onClose={() => setOpen(false)}
      >
        <Grid
          container
          style={{
            display: "flex",
            alignItems: "center",
            padding: 10,
            minWidth: 250,
            justifyContent: "flex-start",
          }}
        >
          <Grid item xs={4}>
            <IconButton onClick={() => setOpen(!open)}>
              <img src={logo} alt="dog" style={{ width: 40, height: 40 }} />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Typography style={{ color: "#fff", fontSize: 12 }}>
              React.JS With Dogs
            </Typography>
          </Grid>
        </Grid>
        <Divider style={{ backgroundColor: "#5a5a5a" }} />

        <List style={{ paddingLeft: 15 }}>
          <ListItem button style={{}}>
            <ListItemIcon>
              <HomeIcon style={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography style={{ color: "#FFFFFF", fontSize: 12 }}>
                  Inicio
                </Typography>
              }
            />
          </ListItem>
          <ListItem button style={{}}>
            <ListItemIcon>
              <StarIcon style={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography style={{ color: "#FFFFFF", fontSize: 12 }}>
                  Favoritos
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
