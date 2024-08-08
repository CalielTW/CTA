import React from "react";
import { AuthTwitchForm } from "../../components/auth/authTwitchForm";
import { Container } from "@mui/material";

export const AuthTwitch = () => {
  return (
    <Container sx={{ m: "2rem", mx: "auto" }}>
      <AuthTwitchForm />
    </Container>
  );
};
