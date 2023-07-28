import { Box } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Sidedrawer from "../SideDrawer/Sidedrawer";
import Appbar from "../Appbar/Appbar";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      padding: theme.spacing(2),
    },
    page: {
      width: "100%",
    },
    toolbar: theme.mixins.toolbar,
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {/* APP BAR */}
      <Appbar drawerWidth={drawerWidth} />

      {/* SIDE DRAWER */}
      <Sidedrawer drawerWidth={drawerWidth} />

      <Box className={classes.page}>
        <Box className={classes.toolbar}></Box>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
