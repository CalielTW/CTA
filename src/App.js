import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/layout/Navbar";
import { SnackbarProvider } from "notistack";
import darkTheme from "./constants/darkTheme";

//Pages
import { AuthTwitch } from "./pages/auth/authTwitch";
import { AuthObs } from "./pages/auth/authObs";
import { TwitchView } from "./pages/twitchName";
import { WheelView } from "./pages/wheel";

//States
import TwitchState from "./contexts/twitch/TwitchState";
import ObsState from "./contexts/obs/ObsState";
import WheelState from "./contexts/wheel/WheelState";

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <ObsState>
          <TwitchState>
            <WheelState>
              <Router>
                <NavBar />
                <Routes>
                  <Route exact path="/Twitch" element={<AuthTwitch />} />
                  <Route exact path="/Obs" element={<AuthObs />} />
                  <Route exact path="/Twitch/:name" element={<TwitchView />} />
                  <Route exact path="/Twitch/Wheel" element={<WheelView />} />
                </Routes>
              </Router>
            </WheelState>
          </TwitchState>
        </ObsState>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
