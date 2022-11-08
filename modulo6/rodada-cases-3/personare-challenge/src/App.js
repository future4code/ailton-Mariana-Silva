import React from "react";
import { Router } from "./routes/Router";
import { GlobalState } from "./Global/GlobalState";

export const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
};
