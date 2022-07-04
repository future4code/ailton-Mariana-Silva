import React from "react";
import Post from "./components/Post/Post";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <AppContainer>
      <Post
        nomeUsuario={"Usuário"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />
    </AppContainer>
  );
};

export default App;