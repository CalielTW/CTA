import {
  SET_ERROR,
  SET_LOADING,
  CLEAR_STATE,
  LOG_IN_OBS,
  GET_SCENES_OBS,
  SET_SCENES_OBS,
  SET_TTS_MODE,
  GET_SCENE_OBS,
} from "../types";

const obsReducer = (state, action) => {
  switch (action.type) {
    case GET_SCENE_OBS:
      return {
        ...state,
        scenes: action.payload.scenes,
        scene: action.payload.scene,
        loading: false,
        error: null,
      };
    case GET_SCENES_OBS:
      return {
        ...state,
        scenes: action.payload.scenes,
        scene: action.payload.scene,
        loading: false,
        error: null,
      };
    case SET_SCENES_OBS:
      return {
        ...state,
        scenes: action.payload,
        loading: false,
        error: null,
      };
    case SET_TTS_MODE:
      return {
        ...state,
        ttsMode: action.payload,
        loading: false,
        error: null,
      };
    case LOG_IN_OBS:
      return {
        ...state,
        obsPort: action.payload.obsPort,
        obsPassword: action.payload.obsPassword,
        obsConnected: action.payload.obsConnected,
        obsManager: action.payload.obsManager,
        loading: false,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CLEAR_STATE:
      return {
        obsPort: "",
        obsPassword: "",
        obsConnected: false,
        obsManager: {},
        scenes: [],
        scene: {},
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default obsReducer;
