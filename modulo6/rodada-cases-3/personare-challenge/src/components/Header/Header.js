import React from "react";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { goToEntryPage } from "../../routes/coordinator";
import { HeaderContainer } from "./styled";
import { TiArrowBackOutline } from "react-icons/ti";

export const Header = () => {
  const navigate = useNavigate();

  let userName = localStorage.getItem("userName");

  return (
    <HeaderContainer>
      <p>Olá, {userName}</p>
      <img src={Logo} alt="Logo Personare" />
      <button className="button" onClick={() => goToEntryPage(navigate)}>
        <TiArrowBackOutline /> Sair do jogo
      </button>
    </HeaderContainer>
  );
};
