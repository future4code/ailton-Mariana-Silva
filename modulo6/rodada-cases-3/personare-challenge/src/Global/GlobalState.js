import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const [tarot, setTarot] = useState(undefined);
  const [cardSide, setCardSide] = useState(true);
  const [userName, setUserName] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const states = {
    tarot,
    cardSide,
    userName,
    scrollY,
    isLoading
  };
  const setters = {
    setTarot,
    setCardSide,
    setUserName,
    setScrollY,
    setIsLoading
  };

  return (
    <GlobalContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
