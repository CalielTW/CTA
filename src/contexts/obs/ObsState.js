import React, { useReducer } from "react";
import obsContext from "./obsContext";
import obsReducer from "./obsReducer";
import {
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
  LOG_IN_OBS,
  GET_SCENES_OBS,
  GET_SCENE_OBS,
} from "../types";
import { connectObs } from "../../utils/obsEvents";
import { useSnackbar } from "notistack";

const ObsState = (props) => {
  const initialState = {
    obsPort: process.env.REACT_APP_OBS_WEBSOCKET_PORT || "",
    obsPassword: process.env.REACT_APP_OBS_WEBSOCKET_PASSWORD || "",
    obsConnected: false,
    scenes: [],
    scene: {},
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(obsReducer, initialState);
  const { enqueueSnackbar } = useSnackbar();

  const getScenes = (event) => {
    setLoading();
    try {
      dispatch({
        type: GET_SCENES_OBS,
        payload: {
          scenes: event.scenes,
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

  const getCurrentScene = (scene) => {
    setLoading();
    try {
      dispatch({
        type: GET_SCENE_OBS,
        payload: {
          scene,
        },
      });
    } catch (error) {
      setError(error);
    }
  };

  const logInObs = async (user) => {
    setLoading();
    try {
      const { obsPort, obsPassword } = user;

      const responseObs = await connectObs({
        obsPort,
        obsPassword,
        getCurrentScene,
        getScenes,
        setError,
      });

      if (responseObs) {
        enqueueSnackbar(`Connected to obs`, {
          variant: "success",
        });
        dispatch({
          type: LOG_IN_OBS,
          payload: {
            obsPort,
            obsPassword,
            obsConnected: true,
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
        scenes: state.scenes,
        scene: state.scene,
        loading: state.loading,
        error: state.error,
        getScenes,
        logInObs,
        logOutObs,
        setLoading,
        setError,
      }}
    >
      {props.children}
    </obsContext.Provider>
  );
};

export default ObsState;
