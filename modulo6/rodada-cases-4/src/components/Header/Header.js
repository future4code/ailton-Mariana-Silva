import { GlobalContext } from "../../Global/GlobalContext";
import { InputAdornment, TextField } from "@mui/material";
import { HeaderContainer, InputSearch } from "./styled";
import React, { useContext, useEffect } from "react";
import { GetSearch } from "../../services/requests";
import { goToHome } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import Logo from "../../assets/logo.svg";

export const Header = ({ page }) => {
  const { states, setters } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    GetSearch(states.search, setters.setSearchMovie);
  }, [states.search, setters.setSearchMovie]);

  return (
    <HeaderContainer>
      {page === "home" ? (
        <>
          <img src={Logo} alt="Logo TMDB" />
          <InputSearch>
            <TextField
              sx={{ input: { color: "white", border: "white" } }}
              id="input-with-icon-textfield"
              className="textfield"
              variant="standard"
              placeholder="Busque por um filme"
              fullWidth
              value={states?.search}
              onChange={(event) => setters?.setSearch(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BsSearch />
                  </InputAdornment>
                ),
              }}
            />
          </InputSearch>
          <TiArrowBack className="back" color="#5c16c5" />
        </>
      ) : (
        <>
          <img src={Logo} alt="Logo TMDB" onClick={() => goToHome(navigate)} />
          <TiArrowBack
            className="back"
            cursor={"pointer"}
            onClick={() => goToHome(navigate)}
          />
        </>
      )}
    </HeaderContainer>
  );
};
