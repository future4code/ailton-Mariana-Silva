import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Error, DivButton } from "./styled";

export default function ErrorPage() {
  const goToHomePage = () => navigate("/");

  const navigate = useNavigate();
  return (
    <Container>
      <Title>LabeX</Title>
      <Error>PÁGINA NÃO ENCONTRADA</Error>
      <DivButton>
        <button onClick={goToHomePage}>Pagina Inicial</button>
      </DivButton>
    </Container>
  );
}
