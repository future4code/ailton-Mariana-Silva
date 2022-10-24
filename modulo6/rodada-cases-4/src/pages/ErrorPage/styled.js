import styled from "styled-components";

export const Container = styled.section`
  margin: auto;
`;
export const Error = styled.h1`
  font-size: 2.625rem;
  text-align: center;
  text-shadow: 0.125rem 0.125rem white;
  color: #5c16c5;
  font-family: "Combo";
  font-variant: small-caps;
  text-shadow: 0.3125rem 0.3125rem 0.125rem white,
    0.125rem 0.125rem 0.625rem #5c16c5;
`;
export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    cursor: pointer;
    background-color: #5c16c5;
    border-radius: 0.625rem;
    color: white;
    width: 11rem;
    height: 2.8rem;
    font-size: 1.0625rem;
    margin-top: 1.25rem;
    border: transparent;
    font-family: "Combo";
    font-variant: small-caps;
  }
`;
