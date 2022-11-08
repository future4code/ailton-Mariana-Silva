import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../Global/GlobalStyled";
import { EntryPage } from "../pages/EntryPage/EntryPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { GamePage } from "../pages/GamePage/GamePage";

export const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route index element={<EntryPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
