import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useTwitch from "../../hooks/useTwitch";
import useObs from "../../hooks/useObs";
import { purple } from "@mui/material/colors";
import firmaCalielB from "../../static/firmaCalielB.png";
import { azureMicrosoftServices } from "../../utils/SpeechRecognition";

export const NavBar = () => {
  const {
    twitchName,
    twitchToken,
    newMessageTTS1,
    newMessageTTS2,
    newMessageTTS3,
    currentTtsUser1,
    currentTtsUser2,
    currentTtsUser3,
    clearCurrentTtsMessage,
    loading,
    error,
  } = useTwitch();
  const { scene, scenes, setTtsMode, ttsMode, obsManager } = useObs();

  const [currentScene, setCurrentScene] = useState({});

  const [pagesMenu, setPagesMenu] = useState([
    { url: "/Twitch", name: "Twitch" },
    { url: "/Obs", name: "Obs" },
  ]);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const queue = useRef([]);
  const processing = useRef(false);

  const processQueue = async () => {
    if (processing.current || queue.current.length === 0) return;

    processing.current = true;
    const { message, userNumber } = queue.current.shift();

    if (ttsMode && message && obsManager) {
      await azureMicrosoftServices(message, obsManager, userNumber);
      clearCurrentTtsMessage(userNumber);
    }

    processing.current = false;

    if (queue.current.length > 0) {
      processQueue();
    }
  };

  useEffect(() => {
    if (scenes?.length) {
      scenes.forEach((auxScene) => {
        if (auxScene.sceneUuid === scene.sceneUuid) setCurrentScene(auxScene);
      });
    }
    //eslint-disable-next-line
  }, [scenes, scene]);

  useEffect(() => {
    if (currentScene?.tts) setTtsMode(currentScene.tts);

    //eslint-disable-next-line
  }, [currentScene]);

  useEffect(() => {
    const addToQueue = (message, userNumber) => {
      if (message) {
        queue.current.push({ message, userNumber });
        processQueue();
      }
    };

    addToQueue(newMessageTTS1?.message, 1);
    addToQueue(newMessageTTS2?.message, 2);
    addToQueue(newMessageTTS3?.message, 3);

    //eslint-disable-next-line
  }, [ttsMode, newMessageTTS1, newMessageTTS2, newMessageTTS3]);

  const handleShowTtsCharacter = async (show, userNumber) => {
    if (obsManager?.setSourceVisibility) {
      await obsManager.setSourceVisibility(
        `${currentScene.sceneName}`,
        `TTS-Char${userNumber}`,
        show
      );
    }
  };

  useEffect(() => {
    handleShowTtsCharacter(currentTtsUser1 !== "" && ttsMode, 1);
    handleShowTtsCharacter(currentTtsUser2 !== "" && ttsMode, 2);
    handleShowTtsCharacter(currentTtsUser3 !== "" && ttsMode, 3);

    //eslint-disable-next-line
  }, [ttsMode, currentTtsUser1, currentTtsUser2, currentTtsUser3]);

  useEffect(() => {
    if (twitchName && !loading && !error) {
      const auxMenu = pagesMenu.filter(
        (page) => !page.url.includes("/Twitch/")
      );

      auxMenu.push({ url: `/Twitch/${twitchName}`, name: `${twitchName}` });
      auxMenu.push({ url: `/Twitch/Wheel`, name: `Wheel` });

      setPagesMenu(auxMenu);
    }
    //eslint-disable-next-line
  }, [twitchName, twitchToken, loading, error]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: purple[900] }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Larger Screen Version */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              <img
                alt="Logo"
                src={firmaCalielB}
                style={{ height: "60px", margin: "0 auto" }}
              />
            </Box>

            <Box sx={{ flexGrow: 1, display: "flex", marginLeft: 3 }}>
              {pagesMenu.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.url}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "flex",
                    textTransform: "uppercase",
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Smaller Screen Version */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              <img
                alt="Logo"
                src={firmaCalielB}
                style={{ height: "60px", margin: "0 auto" }}
              />
            </Box>
            <Box sx={{ width: "48px" }} />
          </Box>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pagesMenu.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page.url}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textAlign: "center",
                  textTransform: "uppercase",
                  width: "100%",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
