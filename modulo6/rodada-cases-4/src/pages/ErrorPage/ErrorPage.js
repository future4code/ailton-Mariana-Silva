import { Container, DivButton, Error } from "./styled";
import { goToHome } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import React from "react";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Error>Página não Encontrada!</Error>
      <DivButton>
        <button onClick={() => goToHome(navigate)}>Voltar</button>
      </DivButton>
    </Container>
  );
};
