import { Box, Typography } from "@mui/material";
import React from "react";
import SettingTabs from "../components/SettingTabs/SettingTabs";

const Setting = () => {
  return (
    <Box>
      <Typography variant="h6">Settings</Typography>
      <SettingTabs />
    </Box>
  );
};

export default Setting;
