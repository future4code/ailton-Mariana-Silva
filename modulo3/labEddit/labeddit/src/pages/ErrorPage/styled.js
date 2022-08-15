import styled from "styled-components";

export const ErrorContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 200px;
    font-weight: 900;
    margin-bottom: -20px;
    background: -webkit-linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 48px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 15px;
     background: -webkit-linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
