import React from "react";
import { AuthObsForm } from "../../components/auth/authObsForm";
import { Container } from "@mui/material";

export const AuthObs = () => {
  return (
    <Container sx={{ margin: "2rem", mx: "auto" }}>
      <AuthObsForm />
    </Container>
  );
};
