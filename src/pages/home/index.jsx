import React from "react";
import { Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";

export const Home = () => {
  const { name } = useParams();

  return (
    <Container sx={{ m: "2rem", mx: "auto" }}>
      <Typography>{name}</Typography>
    </Container>
  );
};
