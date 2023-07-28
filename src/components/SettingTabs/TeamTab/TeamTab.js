import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import TempDrawer from "../../TempDrawer/TempDrawer";
import TeamMembersTable from "../../TeamMembersTable/TeamMembersTable";
import PopupModal from "../../PopupModal/PopupModal";

const TeamTab = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [teamMembersData, setTeamMembersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPopupModal, setShowPopupModal] = useState(false);

  const showDrawerHandler = () => {
    setShowDrawer(true);
  };

  const submitDataHandler = async (finalData) => {
    try {
      setError(null);
      const res = await fetch(
        "https://team-members-api.onrender.com/teamMembers",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(finalData),
        }
      );
      const data = await res.json();
      setShowDrawer(false);
      setShowPopupModal(true);
      setTeamMembersData([...teamMembersData, data]);
      // console.log(data);
    } catch (error) {
      setError(error);
      setShowPopupModal(true);
      setShowDrawer(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://team-members-api.onrender.com/teamMembers")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong!");
      })
      .then((data) => {
        setTeamMembersData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setShowPopupModal(true);
        setLoading(false);
      });
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

      <TeamMembersTable
        teamMembersData={teamMembersData}
        loading={loading}
        error={error}
      />

      <TempDrawer
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        submitData={submitDataHandler}
      />

      {teamMembersData && !loading && !error && (
        <PopupModal
          message="Your message has been sent"
          severity="success"
          openModal={showPopupModal}
          setShowPopupModal={setShowPopupModal}
        />
      )}

      {!loading && error && (
        <PopupModal
          severity="error"
          message={error}
          openModal={showPopupModal}
          setShowPopupModal={setShowPopupModal}
        />
      )}
    </Box>
  );
};

export default TeamTab;
