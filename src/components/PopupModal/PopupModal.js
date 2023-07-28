import React from "react";
import { Alert, Box, Button, Snackbar, Stack } from "@mui/material";

const PopupModal = ({ message, severity, openModal, setShowPopupModal }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowPopupModal(false);
  };

  return (
    <Snackbar
      open={openModal}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default PopupModal;
