import { Chat, ChatEvents, Api, ChatCommands } from "twitch-js";

export const connectTwitch = async ({
  twitchName,
  twitchToken,
  getTwitchMessage,
  setError,
}) => {
  const channel = twitchName;
  const twitchChannel = `#${channel}`;
  let success;

  try {
    const chat = new Chat({
      username: twitchName,
      token: twitchToken,
    });

    await chat.connect();
    await chat.join(channel);

    //Get twitch chat info
    chat.on(ChatEvents.ALL, (payload) => {
      if (payload.channel !== twitchChannel || payload.command !== "PRIVMSG")
        return;

      getTwitchMessage(payload);
    });

    return (success = true);
  } catch (error) {
    setError(error);

    return (success = false);
  }
};
