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
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { purple, deepOrange } from "@mui/material/colors";
import { Twitch } from "react-feather";
import useTwitch from "../../hooks/useTwitch";

export const AuthTwitchForm = () => {
  const { logInTwitch, twitchName, twitchToken } = useTwitch();
  const [name, setName] = useState(twitchName);
  const [token, setToken] = useState(twitchToken);
  const [showToken, setShowToken] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    logInTwitch({ twitchName: name, twitchToken: token });
  };

  const handleClickShowToken = () => setShowToken((show) => !show);

  const handleMouseDownToken = (event) => {
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
          <Twitch size={33} color={purple[800]} />
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ marginLeft: 1, color: purple[800] }}
          >
            Auth Twitch Form
          </Typography>
        </Box>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          required
          color="primary"
          onChange={(e) => setName(e.target.value)}
          sx={{
            "& label.Mui-focused": { color: purple[800] },
            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
              borderColor: purple[800],
            },
          }}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-port">Token</InputLabel>
          <OutlinedInput
            id="outlined-adornment-port"
            type={showToken ? "text" : "password"}
            onChange={(e) => setToken(e.target.value)}
            value={token}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle port visibility"
                  onClick={handleClickShowToken}
                  onMouseDown={handleMouseDownToken}
                  edge="end"
                >
                  {showToken ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Token"
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
            To generate tokens, use https://twitchtokengenerator.com
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

export default AuthTwitchForm;
