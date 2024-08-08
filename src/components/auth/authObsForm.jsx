import React, { useState } from "react";
import {
  Container,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { purple, deepOrange } from "@mui/material/colors";
import useObs from "../../hooks/useObs";

export const AuthObsForm = () => {
  const { logInObs, obsPort, obsPassword } = useObs();
  const [password, setPassword] = useState(obsPassword);
  const [showPassword, setShowPassword] = useState(false);
  const [port, setPort] = useState(obsPort);
  const [showPort, setShowPort] = useState(false);

  const handleClickShowPort = () => setShowPort((show) => !show);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (event) => {
    event.preventDefault();

    logInObs({ obsPort: port, obsPassword: password });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPort = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "background.paper",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          borderColor: purple[800],
          borderWidth: 2,
          borderStyle: "solid",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ marginLeft: 1, color: purple[800] }}
          >
            Auth Obs Form
          </Typography>
        </Box>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-port">Port</InputLabel>
          <OutlinedInput
            id="outlined-adornment-port"
            type={showPort ? "text" : "password"}
            onChange={(e) => setPort(e.target.value)}
            value={port}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle port visibility"
                  onClick={handleClickShowPort}
                  onMouseDown={handleMouseDownPort}
                  edge="end"
                >
                  {showPort ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Port"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <Typography
            variant="caption"
            component="h1"
            color={"GrayText"}
            gutterBottom
            sx={{ marginLeft: 1 }}
          >
            Open up OBS. Make sure you're running version 28.X or later. Click
            Tools, then WebSocket Server Settings. Make sure "Enable WebSocket
            server" is checked. Set port and password with the same info your
            adding in the form.
          </Typography>
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: deepOrange[700],
            "&:hover": { backgroundColor: deepOrange[800] },
          }}
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default AuthObsForm;
