import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import TempDrawer from "../../TempDrawer/TempDrawer";
import TeamMembersTable from "../../TeamMembersTable/TeamMembersTable";

const TeamTab = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [teamMembersData, setTeamMembersData] = useState([]);
  const [loading, setLoading] = useState(false);

  const showDrawerHandler = () => {
    setShowDrawer(true);
  };

  const submitDataHandler = async (finalData) => {
    try {
      const res = await fetch("/teamMembers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const data = await res.json();

      setShowDrawer(false);
      setTeamMembersData([...teamMembersData, data]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      setLoading(true);
      fetch("/teamMembers")
        .then((res) => res.json())
        .then((data) => {
          setTeamMembersData(data);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  }, []);

  return (
    <Box mt={2}>
      <Grid container justifyContent="flex-end" mb={2}>
        <Grid item>
          <Button
            disableRipple
            variant="contained"
            color="success"
            onClick={showDrawerHandler}
          >
            Add New
          </Button>
        </Grid>
      </Grid>

      <TeamMembersTable teamMembersData={teamMembersData} loading={loading} />
      <TempDrawer
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        submitData={submitDataHandler}
      />
    </Box>
  );
};

export default TeamTab;