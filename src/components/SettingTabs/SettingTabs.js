import { Box, Tab, Tabs, TabPanel, Typography } from "@mui/material";
import React from "react";
import GeneralTab from "./GeneralTab/GeneralTab";
import BillingTab from "./BillingTab/BillingTab";
import TeamTab from "./TeamTab/TeamTab";
import { makeStyles } from "@mui/styles";

const tabs = [
  { label: "General", value: "general" },
  { label: "Team", value: "team" },
  { label: "Billing", value: "billing" },
];

const SettingTabs = () => {
  const [value, setValue] = React.useState("team");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }} mt={1}>
      <Tabs
        sx={{
          color: "#fff",
          // "& button:active": { background: "orange" },
        }}
        value={value}
        onChange={handleChange}
        textColor="secondary"
        aria-label="secondary tabs example"
      >
        {tabs.map((tab, i) => (
          <Tab
            sx={{
              backgroundColor: "#64b5f6",
              borderRadius: "12px",
              color: "#fff",
              marginRight: 2,
            }}
            className="Muiselected_tab"
            disableRipple
            key={i}
            value={tab.value}
            label={tab.label}
          />
        ))}
      </Tabs>

      {/* TAB 1 Contents */}
      {value === "general" && <GeneralTab />}

      {/* TAB 2 TEAM CONTENT */}
      {value === "team" && <TeamTab />}

      {/* TAB 3 BILLING CONTENT */}
      {value === "billing" && <BillingTab />}
    </Box>
  );
};

export default SettingTabs;
