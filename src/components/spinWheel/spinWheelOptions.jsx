import React from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  List,
  ListItem,
  Typography,
  IconButton,
  Card,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useTwitch from "../../hooks/useTwitch";
import { grey } from "@mui/material/colors";

export const WheelOptions = () => {
  const { messagesWheel, onlySubs, setOnlySubs, removeMessageWheel } =
    useTwitch();

  const handleActivateScene = (event) => {
    const { checked } = event.target;
    setOnlySubs(checked);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column-reverse", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: 2,
          }}
        >
          <Box
            sx={{
              marginLeft: 1,
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={onlySubs || false}
                  onChange={handleActivateScene}
                  name={"onlySubs"}
                  color="primary"
                />
              }
              label={"Only Subs"}
            />
          </Box>

          <Card
            sx={{
              backgroundColor: grey[100],
              padding: 2,
              height: "60vh",
              overflowY: "auto",
            }}
          >
            <List sx={{ display: "flex", flexDirection: "column" }}>
              {messagesWheel.length > 0 &&
                messagesWheel.map((message, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      backgroundColor: grey[300],
                      borderRadius: "15px",
                      paddingY: 1,
                      paddingX: 2,
                      marginBottom: 1,
                    }}
                  >
                    <Typography component="span">{message}</Typography>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => removeMessageWheel(message)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
            </List>
          </Card>
        </Box>
      </Box>
    </>
  );
};
