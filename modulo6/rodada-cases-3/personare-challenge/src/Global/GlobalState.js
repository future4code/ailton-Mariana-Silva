import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const [tarot, setTarot] = useState(undefined);
  const [cardSide, setCardSide] = useState(true);
  const [userName, setUserName] = useState("");
  const [scrollY, setScrollY] = useState(0);

  const states = {
    tarot,
    cardSide,
    userName,
    scrollY,
  };
  const setters = {
    setTarot,
    setCardSide,
    setUserName,
    setScrollY,
  };

  return (
    <GlobalContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
