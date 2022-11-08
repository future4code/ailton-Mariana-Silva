import { GlobalState } from "./Global/GlobalState";
import { GlobalStyle } from "./Global/GlobalStyle";
import { Router } from "./routes/Router";

export const App = () => {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
};
