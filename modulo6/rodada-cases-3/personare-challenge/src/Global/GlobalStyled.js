import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
#root,body{
  min-height: 100vh;
  max-width: 100vw;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.75rem;
  }
  ::-webkit-scrollbar-track {
    border-radius: 0.625rem;
    margin-top: 4.9375rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: lightblue;
    border-radius: 0.1875rem;
  }
}
#root{
  display: flex;
  flex-direction: column;
  background-color: lightblue;
}
`;
