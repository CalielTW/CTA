import React, { useReducer, useEffect, useRef } from "react";
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
  GET_MESSAGE_TTS_TWITCH,
  REMOVE_MESSAGES_WHEEL,
  RESET_TTS_USERNAME,
  CLEAR_TTS_MESSAGE_USERNAME,
  CLEAR_MESSAGES_WHEEL,
} from "../types";
import { connectTwitch } from "../../utils/twitchChatEvents";
import { useSnackbar } from "notistack";

const TwitchState = (props) => {
  const initialState = {
    twitchName: process.env.REACT_APP_TWITCH_NAME || "",
    twitchToken: process.env.REACT_APP_TWITCH_TOKEN || "",
    currentTtsUser1: "",
    currentTtsUser2: "",
    currentTtsUser3: "",
    newMessageTTS1: {},
    newMessageTTS2: {},
    newMessageTTS3: {},
    messages: [],
    messagesWheel: [],
    onlySubs: false,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(twitchReducer, initialState);
  const { enqueueSnackbar } = useSnackbar();

  const stateRef = useRef(state);
  const getTwitchMessageRef = useRef();
  const removeMessageWheelRef = useRef();
  const ttsResetTimeoutIdRef = useRef(null);

  useEffect(() => {
    stateRef.current = state;
    getTwitchMessageRef.current = getTwitchMessage;
    removeMessageWheelRef.current = removeMessageWheel;
  }, [state]);

  const getTwitchMessage = (newMessage) => {
    setLoading();
    try {
      const { isSelf, tags, message, username } = newMessage;
      const { subscriber, isModerator, customRewardId } = tags;

      const wheelCommandRegex = /^\s*!wheel\s+/;
      const isWheelCommand = wheelCommandRegex.test(message);
      const newMessageWheel = isWheelCommand
        ? message.replace(wheelCommandRegex, "")
        : null;

      const shouldDispatchWheelMessage = stateRef.current.onlySubs
        ? (subscriber !== "0" || isModerator || isSelf) && isWheelCommand
        : isWheelCommand;

      const isTtsUser1 =
        customRewardId &&
        customRewardId === process.env.REACT_APP_TWITCH_REWARD_1;
      const isTtsUser2 =
        customRewardId &&
        customRewardId === process.env.REACT_APP_TWITCH_REWARD_2;
      const isTtsUser3 =
        customRewardId &&
        customRewardId === process.env.REACT_APP_TWITCH_REWARD_3;

      if (
        (isTtsUser1 && stateRef.current.currentTtsUser1 === "") ||
        stateRef.current.currentTtsUser1 === username
      ) {
        handleTtsUser(
          "currentTtsUser1",
          shouldDispatchWheelMessage,
          newMessage,
          username,
          newMessageWheel
        );
      } else if (
        (isTtsUser2 && stateRef.current.currentTtsUser2 === "") ||
        stateRef.current.currentTtsUser2 === username
      ) {
        handleTtsUser(
          "currentTtsUser2",
          shouldDispatchWheelMessage,
          newMessage,
          username,
          newMessageWheel
        );
      } else if (
        (isTtsUser3 && stateRef.current.currentTtsUser3 === "") ||
        stateRef.current.currentTtsUser3 === username
      ) {
        handleTtsUser(
          "currentTtsUser3",
          shouldDispatchWheelMessage,
          newMessage,
          username,
          newMessageWheel
        );
      } else if (shouldDispatchWheelMessage) {
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

  const handleTtsUser = (
    ttsUserKey,
    shouldDispatchWheelMessage,
    newMessage,
    username,
    newMessageWheel
  ) => {
    const ttsUserIndex = ttsUserKey.slice(-1);

    if (shouldDispatchWheelMessage) {
      dispatch({
        type: GET_MESSAGE_TTS_TWITCH,
        payload: { newMessage, username, newMessageWheel, ttsUserIndex },
      });
    } else {
      dispatch({
        type: GET_MESSAGE_TTS_TWITCH,
        payload: { newMessage, username, newMessageWheel: null, ttsUserIndex },
      });
    }

    if (!stateRef.current[ttsUserKey]) {
      if (ttsResetTimeoutIdRef.current) {
        clearTimeout(ttsResetTimeoutIdRef.current);
      }

      ttsResetTimeoutIdRef.current = setTimeout(() => {
        dispatch({
          type: RESET_TTS_USERNAME,
          payload: { ttsUserIndex },
        });

        ttsResetTimeoutIdRef.current = null;
      }, 600000); // 600,000 milliseconds = 10 minutes
    }
  };

  const removeMessageWheel = (messageWheel) => {
    setLoading();
    try {
      const auxMessages = stateRef.current.messagesWheel.filter(
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
        getTwitchMessage: getTwitchMessageRef.current,
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

  const clearCurrentTtsMessage = (ttsUserIndex) =>
    dispatch({ type: CLEAR_TTS_MESSAGE_USERNAME, payload: { ttsUserIndex } });

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
        newMessageTTS1: state.newMessageTTS1,
        newMessageTTS2: state.newMessageTTS2,
        newMessageTTS3: state.newMessageTTS3,
        currentTtsUser1: state.currentTtsUser1,
        currentTtsUser2: state.currentTtsUser2,
        currentTtsUser3: state.currentTtsUser3,
        messages: state.messages,
        messagesWheel: state.messagesWheel,
        onlySubs: state.onlySubs,
        loading: state.loading,
        error: state.error,
        logInTwitch,
        logOutTwitch,
        clearMessagesWheel,
        clearCurrentTtsMessage,
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
