import {
  SET_ERROR,
  SET_LOADING,
  SET_ONLY_SUBS,
  CLEAR_STATE,
  CLEAR_MESSAGES_WHEEL,
  LOG_IN_TWITCH,
  GET_MESSAGE_TWITCH,
  GET_MESSAGE_WHEEL_TWITCH,
  REMOVE_MESSAGES_WHEEL,
} from "../types";

export default (state, action) => {
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
    case REMOVE_MESSAGES_WHEEL:
      return {
        ...state,
        messagesWheel: [...action.payload.newMessagesWheel],
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
