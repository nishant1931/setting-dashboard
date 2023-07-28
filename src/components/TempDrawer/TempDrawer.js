import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import PopupModal from "../PopupModal/PopupModal";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";

const useStyles = makeStyles({
  inputFields: {
    padding: 5,
  },
});

const TempDrawer = ({
  showDrawer,
  setShowDrawer,
  submitData,
  showPopupModal,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userRole, setUserRole] = useState("lawyer");
  const [rolePermissions, setRolePermissions] = useState({
    accessAllCases: true,
    requestNewDocs: true,
    chatWithPc: true,
  });

  const classes = useStyles;

  const submitTeamMemberHandler = async (e) => {
    e.preventDefault();

    if (firstName === "" && lastName === "" && email === "") {
      return "EMPTY";
    } else {
      const fullName = `${firstName} ${lastName}`;
      // console.log("FULL NAME", fullName);
      // console.log("Email", email);
      // console.log("Role", userRole);
      // console.log("Permissions", rolePermissions);

      const finalData = {
        name: fullName,
        email: email,
        role: userRole,
      };

      await submitData(finalData);

      setFirstName("");
      setLastName("");
      setEmail("");
      setUserRole("lawyer");
    }
  };

  const updatePermissions = (role) => {
    if (userRole === "lawyer") {
      setRolePermissions({
        ...rolePermissions,
        accessAllCases: true,
        requestNewDocs: true,
        chatWithPc: true,
      });
    } else if (userRole === "paralegal") {
      setRolePermissions({ ...rolePermissions, accessAllCases: false });
    } else if (userRole === "admin") {
      setRolePermissions({
        ...rolePermissions,
        accessAllCases: false,
        chatWithPc: false,
      });
    }
  };

  useEffect(() => {
    updatePermissions(userRole);
  }, [userRole]);

  const rolePermissionHandler = (e) => {
    setRolePermissions({
      ...rolePermissions,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <Drawer
      open={showDrawer}
      anchor="right"
      onClose={() => setShowDrawer(false)}
    >
      <Box role="presentation" sx={{ width: "300px" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="10px"
        >
          <Typography variant="h6">Invite Team Member</Typography>
          <CloseIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setShowDrawer(false)}
          />
        </Box>
        <Divider />
        <Box
          mt={3}
          component="form"
          onSubmit={submitTeamMemberHandler}
          noValidate
          autoComplete="off"
        >
          <Box
            sx={{
              padding: "10px",
            }}
          >
            <Box display="flex" gap={1} alignItems="center" mb={2}>
              <Box display="flex" flexDirection="column">
                <InputLabel htmlFor="first-name" sx={{ marginBottom: 0.5 }}>
                  First Name
                </InputLabel>
                <OutlinedInput
                  size="small"
                  className={classes.inputFields}
                  id="first-name"
                  placeholder="Ram"
                  variant="outlined"
                  color="primary"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </Box>
              <Box display="flex" flexDirection="column">
                <InputLabel htmlFor="last-name" sx={{ marginBottom: 0.5 }}>
                  Last Name
                </InputLabel>
                <OutlinedInput
                  id="last-name"
                  size="small"
                  placeholder="Kumar"
                  variant="outlined"
                  color="primary"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </Box>
            </Box>
            <Box>
              <InputLabel htmlFor="email" sx={{ marginBottom: 0.5 }}>
                Email
              </InputLabel>
              <OutlinedInput
                id="email"
                placeholder="abc@gmail.com"
                size="small"
                fullWidth
                sx={{ marginBottom: 2 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </Box>
          </Box>
          <Divider />
          <Box px="10px" my={2}>
            <FormControl fullWidth>
              <InputLabel id="user-role-id">User role</InputLabel>
              <Select
                labelId="user-role-label"
                size="small"
                id="user-role-id"
                label="User role"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
              >
                <MenuItem disableRipple value="lawyer">
                  Lawyer
                </MenuItem>
                <MenuItem disableRipple value="paralegal">
                  Paralegal
                </MenuItem>
                <MenuItem disableRipple value="admin">
                  Admin
                </MenuItem>
              </Select>
            </FormControl>

            <FormGroup
              sx={{ alignItems: "flex-start", marginTop: 2, paddingLeft: 1 }}
            >
              <FormControlLabel
                className="switch_labels"
                control={
                  <Switch
                    checked={rolePermissions.accessAllCases}
                    name="accessAllCases"
                    onChange={rolePermissionHandler}
                  />
                }
                label="Can access all cases"
                labelPlacement="start"
              />
              <FormControlLabel
                className="switch_labels"
                control={
                  <Switch
                    checked={rolePermissions.requestNewDocs}
                    name="requestNewDocs"
                    onChange={rolePermissionHandler}
                  />
                }
                label="Can request new docs"
                labelPlacement="start"
              />
              <FormControlLabel
                className="switch_labels"
                required
                control={
                  <Switch
                    checked={rolePermissions.chatWithPc}
                    name="chatWithPc"
                    onChange={rolePermissionHandler}
                  />
                }
                label="Can chat with P/C"
                labelPlacement="start"
              />
            </FormGroup>
          </Box>

          <Button
            className=""
            type="submit"
            variant="contained"
            color="success"
            sx={{ position: "absolute", bottom: 20, right: 20 }}
          >
            Send Invite
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default TempDrawer;
