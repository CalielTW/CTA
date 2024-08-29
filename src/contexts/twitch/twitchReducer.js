import {
  SET_ERROR,
  SET_LOADING,
  SET_ONLY_SUBS,
  CLEAR_STATE,
  CLEAR_MESSAGES_WHEEL,
  LOG_IN_TWITCH,
  GET_MESSAGE_TWITCH,
  GET_MESSAGE_WHEEL_TWITCH,
  GET_MESSAGE_TTS_TWITCH,
  REMOVE_MESSAGES_WHEEL,
  RESET_TTS_USERNAME,
  CLEAR_TTS_MESSAGE_USERNAME,
} from "../types";

const twitchReducer = (state, action) => {
  switch (action.type) {
    case LOG_IN_TWITCH:
      return {
        ...state,
        twitchName: action.payload.twitchName,
        twitchToken: action.payload.twitchToken,
        loading: false,
        error: null,
      };
    case GET_MESSAGE_TWITCH:
      return {
        ...state,
        messages: [...state.messages, action.payload.newMessage],
        loading: false,
        error: null,
      };
    case GET_MESSAGE_WHEEL_TWITCH:
      return {
        ...state,
        messages: [...state.messages, action.payload.newMessage],
        messagesWheel: [...state.messagesWheel, action.payload.newMessageWheel],
        loading: false,
        error: null,
      };
    case GET_MESSAGE_TTS_TWITCH:
      return {
        ...state,
        [`newMessageTTS${action.payload.ttsUserIndex}`]:
          action.payload.newMessage,
        messages: [...state.messages, action.payload.newMessage],
        messagesWheel:
          action.payload.newMessageWheel !== null
            ? [...state.messagesWheel, action.payload.newMessageWheel]
            : state.messagesWheel,
        [`currentTtsUser${action.payload.ttsUserIndex}`]:
          action.payload.username,
        loading: false,
        error: null,
      };
    case REMOVE_MESSAGES_WHEEL:
      return {
        ...state,
        messagesWheel: [...action.payload.newMessagesWheel],
        loading: false,
        error: null,
      };
    case CLEAR_TTS_MESSAGE_USERNAME:
      return {
        ...state,
        [`newMessageTTS${action.payload.ttsUserIndex}`]: "",
        loading: false,
        error: null,
      };
    case RESET_TTS_USERNAME:
      return {
        ...state,
        [`currentTtsUser${action.payload.ttsUserIndex}`]: "",
        [`newMessageTTS${action.payload.ttsUserIndex}`]: "",
        loading: false,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ONLY_SUBS:
      return {
        ...state,
        onlySubs: action.payload.onlySubs,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CLEAR_STATE:
      return {
        twitchName: "",
        twitchToken: "",
        newMessageTTS1: "",
        newMessageTTS2: "",
        newMessageTTS3: "",
        currentTtsUser1: "",
        currentTtsUser2: "",
        currentTtsUser3: "",
        messages: [],
        messagesWheel: [],
        onlySubs: false,
        loading: false,
        error: null,
      };
    case CLEAR_MESSAGES_WHEEL:
      return {
        ...state,
        messagesWheel: [],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default twitchReducer;
