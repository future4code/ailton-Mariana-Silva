import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goBack, goToLoginPage } from "../../routes/coordinator";
import { VscChromeClose } from "react-icons/vsc";
import logoLabeddit from "../../assets/logo.png";
import { HeaderContainer, Logo, RightButton, LeftButton } from "./styled";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathParams = useParams();

  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonTest] = useState(
    token ? "Logout" : "Entrar"
  );

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonTest("Entrar");
      goToLoginPage(navigate);
    } else {
      goToLoginPage(navigate);
    }
  };

  return (
    <HeaderContainer>
      {location.pathname === `/post/${pathParams.id}` && (
        <LeftButton onClick={() => goBack(navigate)}>
          <VscChromeClose />
        </LeftButton>
      )}
      <Logo src={logoLabeddit} alt="logo-labeddit" />
      <RightButton onClick={rightButtonAction}>{rightButtonText}</RightButton>
    </HeaderContainer>
  );
};

export default Header;
