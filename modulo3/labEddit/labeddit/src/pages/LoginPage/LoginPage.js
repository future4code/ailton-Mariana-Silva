import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import LoginForm from "./LoginForm";
import LogoImg from "../../assets/logo.png";
import { Logo, LogoContainer } from "./styled";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { LoaderContainer } from "../../constants/generalStyled";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Container,
  ContentContainer,
  TransparentButton,
  Line,
} from "../../constants/generalStyled";

const LoginPage = () => {
  useUnprotectedPage();
  const { states } = useContext(GlobalStateContext);
  const { isLoading } = states;
  const navigate = useNavigate();

  return (
    <Container>
      {!isLoading ? (
        <ContentContainer>
          <LogoContainer>
            <Logo src={LogoImg} alt="logo" />
            <h1>LabEddit</h1>
            <p>O projeto de rede social da Labenu</p>
          </LogoContainer>
          <LoginForm />
          <Line />
          <TransparentButton
            onClick={() => {
              goToSignUpPage(navigate);
            }}
          >
            Crie uma conta!
          </TransparentButton>
        </ContentContainer>
      ) : (
        <LoaderContainer>
          <CircularProgress style={{ color: "orange" }} />
        </LoaderContainer>
      )}
    </Container>
  );
};

export default LoginPage;
