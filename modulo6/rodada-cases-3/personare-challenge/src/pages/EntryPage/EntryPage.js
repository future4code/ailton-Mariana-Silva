import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Global/GlobalContext";
import { goToGame } from "../../routes/coordinator";
import { Container, ContainerCentral, Input } from "./styled";

export const EntryPage = () => {
  const { states, setters } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onChange = (event, value) => {
    setters.setUserName(event.target.value);
    localStorage.setItem("userName", event.target.value);
  };

  return (
    <Container>
      <h1>Bem Vindo(a) ao Tarot Online...</h1>
      <h3>Jogue as cartas e descubra o que os arcanos reservam para você!</h3>
      <ContainerCentral onSubmit={() => goToGame(navigate)}>
        <p>Como você gostaria de ser chamado?</p>
        <Input
          type="text"
          placeholder="Digite seu nome"
          value={states.userName}
          onChange={onChange}
          required
        />
        <button>Começar</button>
      </ContainerCentral>
    </Container>
  );
};
