import React, { useEffect } from "react";
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
  const { obsConnected, scenes, setScenes } = useObs();

  const handleActivateScene = (event) => {
    const { name, checked } = event.target;
    const updatedScenes = scenes.map((scene) => {
      const isCurrentScene = scene.sceneUuid === name;
      return {
        ...scene,
        active: isCurrentScene || checked,
      };
    });
    setScenes(updatedScenes);
  };

  const handleActivateTts = (event) => {
    const { name, checked } = event.target;
    const updatedScenes = scenes.map((scene) =>
      scene.sceneUuid === name ? { ...scene, tts: checked } : scene
    );

    setScenes(updatedScenes);
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
          {scenes?.length > 0 &&
            scenes.map((scene) => (
              <Box
                key={scene.sceneUuid}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <FormControlLabel
                  control={
                    <Switch
                      checked={scene.active || false}
                      name={scene.sceneUuid}
                      color="primary"
                    />
                  }
                  label={scene.sceneName}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={scene.tts || false}
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
