import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import WcIcon from "@mui/icons-material/Wc";
import FlareIcon from "@mui/icons-material/Flare";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";

const dashboardLists = [
  { list: "Dashboard", icon: <DashboardIcon />, to: "/" },
  { list: "Cases", icon: <InsertDriveFileIcon />, to: "/cases" },
  { list: "Clients", icon: <WcIcon />, to: "/clients" },
  { list: "Marketing", icon: <FlareIcon />, to: "/marketing" },
  { list: "Referrals", icon: <HandshakeIcon />, to: "/referrals" },
  {
    list: "Settings",
    icon: <SettingsIcon />,
    to: "/settings",
    className: "setting-bottom",
  },
];

const useStyles = makeStyles({
  active: {
    backgroundColor: "#eee",
  },
});

const Sidedrawer = ({ drawerWidth }) => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography textAlign="center" width="100%" variant="h6">
            Ankin Law
          </Typography>
        </Toolbar>
        <Divider />
        <List sx={{ height: "100%", paddingTop: 0 }}>
          {dashboardLists.map((text, index) => (
            <React.Fragment key={index}>
              <ListItem
                disablePadding
                component={Link}
                to={text.to}
                className={`${text.className ? text.className : null} ${
                  location.pathname === text.to ? classes.active : null
                }`}
              >
                <ListItemButton disableRipple>
                  <ListItemIcon>{text.icon}</ListItemIcon>
                  <ListItemText primary={text.list} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
          <ListItem
            component={Link}
            to="/settings"
            sx={{
              position: "absolute",
              bottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
            }}
          ></ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidedrawer;
