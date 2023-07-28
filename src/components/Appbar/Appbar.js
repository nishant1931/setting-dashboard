import React from "react";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { makeStyles } from "@mui/styles";
import { blue } from "@mui/material/colors";

const useStyles = makeStyles({
  header: {
    background: "#fefefe !important",
  },
  bellIcon: {
    color: "#555",
  },
});

const Appbar = ({ drawerWidth }) => {
  const classes = useStyles();

  return (
    <AppBar
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
      }}
      elevation={0}
      className={classes.header}
    >
      <Toolbar
        sx={{
          paddingLeft: "0 !important",
          paddingRight: "16px !important",
          justifyContent: "flex-end",
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Box display="flex" alignItems="center">
            <HelpIcon fontSize="small" color="warning" />
            <Typography variant="h6" fontSize={16} component="div">
              Help
            </Typography>
          </Box>
          <NotificationsIcon className={classes.bellIcon} />
          <Avatar
            sx={{
              bgcolor: blue[300],
              width: 34,
              height: 34,
            }}
          >
            N
          </Avatar>{" "}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
