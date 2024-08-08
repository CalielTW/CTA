import React from "react";
import { Container, Grid, Card } from "@mui/material";
import { useParams } from "react-router-dom";
import { StreamerOptions } from "../../components/twitchView/streamerOptions";
import { TwitchChat } from "../../components/twitchView/twitchChat";

export const TwitchView = () => {
  const { name } = useParams();

  return (
    <Container sx={{ margin: "2rem", height: "80vh", minWidth: "95%" }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item xs={12} md={4} sx={{ height: "100%" }}>
          <Card sx={{ height: "100%", padding: 2 }}>
            <StreamerOptions name={name} />
          </Card>
        </Grid>
        <Grid item xs={12} md={8} sx={{ height: "100%" }}>
          <Card sx={{ height: "100%", padding: 2 }}>
            <TwitchChat name={name} />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
