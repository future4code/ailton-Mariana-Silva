import React, { useContext } from "react";
import { BackCards, TarotCards } from "../../components/Cards/Cards";
import { Header } from "../../components/Header/Header";
import { GlobalContext } from "../../Global/GlobalContext";
import { Container, CardsContainer, Rules, GoUp } from "./styled";
import { ImArrowUp2 } from "react-icons/im";
import RulesImg from "../../assets/rules.png";
import CardsImg from "../../assets/cards.png";
import Swal from "sweetalert2";

export const GamePage = () => {
  const { states, setters } = useContext(GlobalContext);

  const flipCards = async () => {
    await setters.setCardSide(!states.cardSide);
  };

  const goUp = async () => {
    await setters.setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", goUp);

  return (
    <Container>
      <Header />
      <Rules>
        <p>Como Jogar</p>
        <img
          src={RulesImg}
          alt="Rules"
          onClick={() =>
            Swal.fire({
              title:
                "Ao iniciar o jogo, clique em 'Embaralhar' e escolha uma carta.",
              text: "Mas lembre-se: As cartas não te darão as respostas, pois quem escolhe seu futuro é você!",
              footer:
                "Conheça mais sobre a '" +
                ' <a href="https://www.personare.com.br/" target="_blank"> Personare!</a> ' +
                "",
              imageUrl: `${CardsImg}`,
              imageHeight: 120,
              background: "lightblue",
              showCloseButton: true,
              showConfirmButton: false,
            })
          }
        />
      </Rules>
      <button onClick={flipCards}>
        {states.cardSide ? <p>Embaralhar</p> : <p>Reiniciar</p>}{" "}
      </button>
      <CardsContainer>
        {states.cardSide ? <TarotCards /> : <BackCards />}
      </CardsContainer>
      <GoUp onClick={() => setters.setScrollY(window.scroll(0, 0))}>
        <ImArrowUp2 /> Voltar <br />
        ao topo
      </GoUp>
    </Container>
  );
};
