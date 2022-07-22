import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage";
import HomePage from "../Pages/HomePage/HomePage";
import ListTripsPage from "../Pages/ListTripsPage/ListTripsPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
        exact 
        path={"/"} 
        element={<HomePage />} />

        <Route 
        exact 
        path={"/admin/trips/list"} 
        element={<AdminHomePage />} />

        <Route
          exact
          path={"/trips/application"}
          element={<ApplicationFormPage />}
        />

        <Route
          exact
          path={"/admin/trips/list/create"}
          element={<CreateTripPage />}
        />

        <Route exact path={"/trips/list"} element={<ListTripsPage />} />

        <Route exact path={"/login"} element={<LoginPage />} />

        <Route
          exact
          path={"/admin/trips/:tripId"}
          element={<TripDetailsPage />}
        />

      <Route exact path={"*"} 
      element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
