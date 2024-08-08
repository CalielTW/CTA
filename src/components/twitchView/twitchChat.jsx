import React, { useEffect, useState } from "react";
import { Typography, Card, List, ListItem, Box } from "@mui/material";
import { getRandomColor } from "../../utils/getRandomColor";
import { grey, purple } from "@mui/material/colors";
import useTwitch from "../../hooks/useTwitch";

const replaceEmotes = (message, emotes) => {
  let modifiedMessage = message;

  if (emotes) {
    const sortedEmotes = emotes.sort((a, b) => b.start - a.start);

    sortedEmotes.forEach((emote) => {
      const emoteUrl = `https://static-cdn.jtvnw.net/emoticons/v1/${emote.id}/2.0`;
      const emoteTag = `<img src="${emoteUrl}" alt="emote" style="width: 28px; height: 28px;" />`;
      modifiedMessage =
        modifiedMessage.slice(0, emote.start) +
        emoteTag +
        modifiedMessage.slice(emote.end + 1);
    });
  }

  return modifiedMessage;
};

export const TwitchChat = ({ name }) => {
  const [messagesWithColors, setMessagesWithColors] = useState([]);
  const { messages } = useTwitch();

  useEffect(() => {
    const auxMessages = messages.map((message) => ({
      ...message,
      color: getRandomColor(),
    }));

    setMessagesWithColors(auxMessages);
  }, [messages]);

  return (
    <>
      <Typography
        variant="h6"
        fontSize={18}
        sx={{ color: purple[700], textTransform: "uppercase", marginBottom: 2 }}
      >
        {name} CHAT
      </Typography>
      <Card
        sx={{
          backgroundColor: grey[300],
          paddingX: 2,
          height: "100%",
          overflowY: "auto",
        }}
      >
        <List sx={{ display: "flex", flexDirection: "column-reverse" }}>
          {messagesWithColors.length > 0 &&
            messagesWithColors.map((message, index) => {
              const messageWithEmotes = replaceEmotes(
                message.message,
                message.tags.emotes
              );

              return (
                <ListItem
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    position: "relative",
                    paddingTop: 0,
                    paddingBottom: index === 0 ? 5 : 0,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: message.color,
                      color: "white",
                      borderRadius: "15px",
                      padding: 1,
                      marginBottom: 1,
                      position: "relative",
                      left: -10,
                      top: 25,
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      {message.tags.displayName}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#ffffff",
                      borderRadius: "15px",
                      padding: 2,
                      boxShadow: 1,
                      maxWidth: "60%",
                      wordWrap: "break-word",
                    }}
                    dangerouslySetInnerHTML={{ __html: messageWithEmotes }}
                  ></Box>
                </ListItem>
              );
            })}
        </List>
      </Card>
    </>
  );
};
