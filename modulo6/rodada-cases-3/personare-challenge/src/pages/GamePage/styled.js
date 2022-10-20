import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  button {
    cursor: pointer;
    margin: 6.25rem auto 1.25rem;
    width: 13rem;
    height: 3rem;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: white;
    background-color: #191970;
    border-radius: 0.3rem;
    border: transparent;
    font-family: "Combo";
    font-style: italic;
    font-variant: small-caps;
  }
`;
export const Rules = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: fixed;
  margin: 85px;
  color: #191970;
  img {
    width: 110px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
`;
export const GoUp = styled.div`
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: column;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  align-self: center;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #191970;
  margin: 1.25rem auto 0.9375rem;
  text-align: center;
  font-size: 0.9375rem;
  svg {
    font-size: 1.125rem;
    margin-bottom: 0.3125rem;
  }
`;
