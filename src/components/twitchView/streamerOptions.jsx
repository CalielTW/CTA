import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  FormControlLabel,
  Switch,
  Divider,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import useObs from "../../hooks/useObs";

export const StreamerOptions = ({ name }) => {
  const { obsConnected, scenes, scene } = useObs();
  const [activeScenes, setActiveScenes] = useState({});
  const [ttsScenes, setTtsScenes] = useState({});

  useEffect(() => {
    const initialActiveScenes = scenes.reduce((acc, s) => {
      acc[s.sceneUuid] = s.sceneUuid === scene?.sceneUuid;
      return acc;
    }, {});
    const initialTtsScenes = scenes.reduce((acc, s) => {
      acc[s.sceneUuid] = false;
      return acc;
    }, {});
    setActiveScenes(initialActiveScenes);
    setTtsScenes(initialTtsScenes);
  }, [scenes, scene]);

  const handleActivateScene = (event) => {
    const { name, checked } = event.target;
    setActiveScenes((prevActiveScenes) => ({
      ...prevActiveScenes,
      [name]: checked,
    }));
  };

  const handleActivateTts = (event) => {
    const { name, checked } = event.target;
    setTtsScenes((prevTtsScenes) => ({
      ...prevTtsScenes,
      [name]: checked,
    }));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          fontSize={18}
          sx={{ color: purple[700], textTransform: "uppercase" }}
        >
          OBS {name} CONFIGURATION
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />

      {obsConnected ? (
        <Box sx={{ display: "flex", flexDirection: "column-reverse", gap: 2 }}>
          {scenes.length > 0 &&
            scenes.map((scene) => (
              <Box
                key={scene.sceneUuid}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <FormControlLabel
                  control={
                    <Switch
                      checked={activeScenes[scene.sceneUuid] || false}
                      onChange={handleActivateScene}
                      name={scene.sceneUuid}
                      color="primary"
                    />
                  }
                  label={scene.sceneName}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={ttsScenes[scene.sceneUuid] || false}
                      onChange={handleActivateTts}
                      name={scene.sceneUuid}
                      color="secondary"
                    />
                  }
                  label="TTS"
                  sx={{ marginLeft: "auto" }}
                />
              </Box>
            ))}
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography>Please connect OBS for further configuration</Typography>
        </Box>
      )}
    </>
  );
};
