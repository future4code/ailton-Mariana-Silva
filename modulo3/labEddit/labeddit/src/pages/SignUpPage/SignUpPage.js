import React from "react";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { Container, ContentContainer } from "../../constants/generalStyled";
import SignUpForm from "./SignUpForm";
import { WelcomeTitle } from "./styled";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useContext } from "react";
import { LoaderContainer } from "../../constants/generalStyled";
import CircularProgress from "@mui/material/CircularProgress";

const SignUpPage = () => {
  const { states } = useContext(GlobalStateContext);
  const { isLoading } = states;
  useUnprotectedPage();

  return (
    <Container>
      {!isLoading ? (
        <ContentContainer>
          <WelcomeTitle>Olá, boas vindas ao LabEddit ;)</WelcomeTitle>

          <SignUpForm />
        </ContentContainer>
      ) : (
        <LoaderContainer>
          <CircularProgress style={{ color: "orange" }} />
        </LoaderContainer>
      )}
    </Container>
  );
};

export default SignUpPage;
