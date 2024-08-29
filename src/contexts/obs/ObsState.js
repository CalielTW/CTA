import React, { useReducer, useEffect, useRef, useState } from "react";
import obsContext from "./obsContext";
import obsReducer from "./obsReducer";
import {
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
  LOG_IN_OBS,
  GET_SCENES_OBS,
  GET_SCENE_OBS,
  SET_SCENES_OBS,
  SET_TTS_MODE,
} from "../types";
import { OBSWebsocketsManager } from "../../utils/obsEvents";
import { mergeObsScenes } from "../../utils/mergeObsScenes";
import { useSnackbar } from "notistack";

const ObsState = (props) => {
  const initialState = {
    obsPort: process.env.REACT_APP_OBS_WEBSOCKET_PORT || "",
    obsPassword: process.env.REACT_APP_OBS_WEBSOCKET_PASSWORD || "",
    obsConnected: false,
    obsManager: {},
    ttsMode: false,
    scenes: [],
    scene: {},
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(obsReducer, initialState);
  const { enqueueSnackbar } = useSnackbar();

  const stateRef = useRef(state);
  const getCurrentSceneRef = useRef();
  const getScenesRef = useRef();

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    getCurrentSceneRef.current = getCurrentScene;
    getScenesRef.current = getScenes;
  }, [state.scenes, state.scene]);

  const getCurrentScene = (scene) => {
    setLoading();
    try {
      const currentSceneUuid = scene.sceneUuid;

      const mergedScenes = mergeObsScenes(
        stateRef.current.scenes,
        stateRef.current.scenes,
        currentSceneUuid
      );

      dispatch({
        type: GET_SCENE_OBS,
        payload: {
          scenes: mergedScenes,
          scene,
        },
      });
    } catch (error) {
      setError(error);
    }
  };

  const getScenes = (event) => {
    setLoading();
    try {
      const currentSceneUuid = stateRef.current?.scene?.sceneUuid
        ? stateRef.current.scene.sceneUuid
        : event.currentProgramSceneUuid;

      const mergedScenes = mergeObsScenes(
        event.scenes,
        stateRef.current.scenes,
        currentSceneUuid
      );

      dispatch({
        type: GET_SCENES_OBS,
        payload: {
          scenes: mergedScenes,
          scene: {
            sceneName: event.currentProgramSceneName,
            sceneUuid: event.currentProgramSceneUuid,
          },
        },
      });
    } catch (error) {
      setError(error);
    }
  };

  const setScenes = (scenes) => {
    dispatch({
      type: SET_SCENES_OBS,
      payload: scenes,
    });
  };

  const setTtsMode = (mode) => {
    dispatch({
      type: SET_TTS_MODE,
      payload: mode,
    });
  };

  const logInObs = async (user) => {
    setLoading();
    try {
      const { obsPort, obsPassword } = user;

      const obsManager = new OBSWebsocketsManager({
        obsPort,
        obsPassword,
        setError,
        getScenes: getScenesRef.current,
        getCurrentScene: getCurrentSceneRef.current,
      });

      await obsManager.connect();

      if (obsManager) {
        enqueueSnackbar(`Connected to obs`, {
          variant: "success",
        });
        dispatch({
          type: LOG_IN_OBS,
          payload: {
            obsPort,
            obsPassword,
            obsConnected: true,
            obsManager,
          },
        });
      } else setError({ message: "Error while trying to connect to obs" });
    } catch (error) {
      setError(error);
    }
  };

  const logOutObs = () => dispatch({ type: CLEAR_STATE });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setError = (error) => {
    let errorMessage = "";
    if (error.message) errorMessage = error.message;
    else errorMessage = error;

    enqueueSnackbar(errorMessage, { variant: "error" });

    dispatch({ type: SET_ERROR, payload: error });
  };

  return (
    <obsContext.Provider
      value={{
        obsPort: state.obsPort,
        obsPassword: state.obsPassword,
        obsConnected: state.obsConnected,
        obsManager: state.obsManager,
        ttsMode: state.ttsMode,
        scenes: state.scenes,
        scene: state.scene,
        loading: state.loading,
        error: state.error,
        getScenes,
        setScenes,
        logInObs,
        logOutObs,
        setTtsMode,
        setLoading,
        setError,
      }}
    >
      {props.children}
    </obsContext.Provider>
  );
};

export default ObsState;
