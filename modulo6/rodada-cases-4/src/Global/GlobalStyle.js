import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
}
#root,body{
  min-height: 100vh;
  max-width: 100vw;
  ::-webkit-scrollbar {
    width: 0.75rem;
  }
  ::-webkit-scrollbar-track {
    border-radius: 0.625rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #5C16C5;
  }
}
#root{
  display: flex;
  flex-direction: column;
}
`;
