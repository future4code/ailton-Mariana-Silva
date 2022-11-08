import React, { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";
import { CardSection, BorderCards, Cards } from "./styled";
import { imageBackCard, imagesUrl } from "../../constants/urls";
import { Loading } from "../../components/Loader/Loader";
import { cards } from "../../constants/cards";
import Swal from "sweetalert2";

export const TarotCards = () => {
  const allCards = cards.map((card) => {
    return (
      <Cards key={card?.name}>
        <img src={`${imagesUrl}/${card?.image}`} alt={`${card?.name}`} />
      </Cards>
    );
  });
  return (
    <CardSection>
      <BorderCards>{allCards}</BorderCards>
    </CardSection>
  );
};

export const BackCards = () => {
  const { states, setters } = useContext(GlobalContext);

  const randomCards = async () => {
    const index = Math?.floor(Math?.random() * 77) + 1;
    await setters?.setTarot(cards[index]);

    if (states.tarot) {
      Swal.fire({
        title: `${states?.tarot?.name}`,
        text: `${states?.tarot?.description}`,
        imageUrl: `${imagesUrl}/${states?.tarot?.image}`,
        width: 850,
        imageWidth: 180,
        imageHeight: 270,
        imageAlt: `${states?.tarot?.name}`,
        showCloseButton: true,
        showConfirmButton: false,
        background: "lightblue",
      });
    }
  };

  const allCardsBack = cards.map((card) => {
    return (
        <Cards key={card.name} onClick={randomCards}>
        {states.isLoading && <Loading />}
        {!states.isLoading && (
            <img src={`${imageBackCard}`} alt="back card" />
            )}
            </Cards>
    );
  });

  return (
    <CardSection>
      <BorderCards>{allCardsBack}</BorderCards>
    </CardSection>
  );
};
