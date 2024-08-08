import React, { useReducer } from "react";
import twitchContext from "./twitchContext";
import twitchReducer from "./twitchReducer";
import {
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
  SET_ONLY_SUBS,
  LOG_IN_TWITCH,
  GET_MESSAGE_TWITCH,
  GET_MESSAGE_WHEEL_TWITCH,
  REMOVE_MESSAGES_WHEEL,
  CLEAR_MESSAGES_WHEEL,
} from "../types";
import { connectTwitch } from "../../utils/twitchChatEvents";
import { useSnackbar } from "notistack";

const TwitchState = (props) => {
  const initialState = {
    twitchName: process.env.REACT_APP_TWITCH_NAME || "",
    twitchToken: process.env.REACT_APP_TWITCH_TOKEN || "",
    messages: [],
    messagesWheel: [],
    onlySubs: false,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(twitchReducer, initialState);
  const { enqueueSnackbar } = useSnackbar();

  const getTwitchMessage = (newMessage) => {
    setLoading();
    try {
      const { isSelf, tags, message } = newMessage;
      const { subscriber, isModerator } = tags;

      const wheelCommandRegex = /^\s*!wheel\s+/;
      const isWheelCommand = wheelCommandRegex.test(message);
      const newMessageWheel = isWheelCommand
        ? message.replace(wheelCommandRegex, "")
        : null;

      const shouldDispatchWheelMessage = state.onlySubs
        ? (subscriber !== "0" || isModerator || isSelf) && isWheelCommand
        : isWheelCommand;

      if (shouldDispatchWheelMessage) {
        dispatch({
          type: GET_MESSAGE_WHEEL_TWITCH,
          payload: { newMessage, newMessageWheel },
        });
      } else {
        dispatch({
          type: GET_MESSAGE_TWITCH,
          payload: { newMessage },
        });
      }
    } catch (error) {
      setError(error);
    }
  };

  const removeMessageWheel = (messageWheel) => {
    setLoading();
    try {
      const auxMessages = state.messagesWheel.filter(
        (message) => message !== messageWheel
      );

      dispatch({
        type: REMOVE_MESSAGES_WHEEL,
        payload: { newMessagesWheel: auxMessages },
      });
    } catch (error) {
      setError(error);
    }
  };

  const logInTwitch = async (user) => {
    setLoading();
    try {
      const { twitchName, twitchToken } = user;

      const responseTwitch = await connectTwitch({
        twitchName,
        twitchToken,
        getTwitchMessage,
        setError,
      });

      if (responseTwitch) {
        enqueueSnackbar(`Connected to ${twitchName} twitch chat`, {
          variant: "success",
        });
        dispatch({
          type: LOG_IN_TWITCH,
          payload: {
            twitchName,
            twitchToken,
          },
        });
      }
    } catch (error) {
      setError(error);
    }
  };

  const setOnlySubs = (onlySubs) =>
    dispatch({ type: SET_ONLY_SUBS, payload: { onlySubs } });

  const clearMessagesWheel = () => dispatch({ type: CLEAR_MESSAGES_WHEEL });

  const logOutTwitch = () => dispatch({ type: CLEAR_STATE });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setError = (error) => {
    let errorMessage = "";
    if (error.message) errorMessage = error.message;
    else errorMessage = error;

    enqueueSnackbar(errorMessage, { variant: "error" });

    dispatch({ type: SET_ERROR, payload: error });
  };

  return (
    <twitchContext.Provider
      value={{
        twitchName: state.twitchName,
        twitchToken: state.twitchToken,
        messages: state.messages,
        messagesWheel: state.messagesWheel,
        onlySubs: state.onlySubs,
        loading: state.loading,
        error: state.error,
        logInTwitch,
        logOutTwitch,
        clearMessagesWheel,
        getTwitchMessage,
        removeMessageWheel,
        setOnlySubs,
        setLoading,
        setError,
      }}
    >
      {props.children}
    </twitchContext.Provider>
  );
};

export default TwitchState;
