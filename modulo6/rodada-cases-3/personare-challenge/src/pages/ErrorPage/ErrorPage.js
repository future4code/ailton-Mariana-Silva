import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, DivButton, Error } from "./styled";
import { goToEntryPage } from "../../routes/coordinator";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Error>Página não Encontrada!</Error>
      <DivButton>
        <button onClick={() => goToEntryPage(navigate)}>Voltar</button>
      </DivButton>
    </Container>
  );
};
