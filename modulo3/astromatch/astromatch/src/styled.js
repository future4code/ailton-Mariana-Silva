import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 638px;
  background-color: black;
  box-shadow: 4px 5px 12px 3px grey;
  border: 1px solid white;
  border-radius: 5px;
  hr {
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 96vh;
  }
`;
