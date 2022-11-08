import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailsPage } from "../pages/DetailsPage/DetailsPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { GlobalStyle } from "../Global/GlobalStyle";

export const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="details/:id" element={<DetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
