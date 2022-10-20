import styled from "styled-components";
import Background from "../../assets/backgorund.gif";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  font-family: "Combo";
  font-style: italic;
  font-variant: small-caps;
  font-size: 1.125rem;
  color: #191970;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: 166vh;
  background-position: top right;
  background-color: lightblue;
  h1,
  h3 {
    padding-left: 2%;
  }
  @media screen and (max-width: 63.125rem) {
    background-image: none;
    text-align: center;
    text-shadow: 0.0625rem 0.125rem 0.1875rem #191970;
    h1 {
      padding: 1%;
      padding-left: 0;
    }
    h3 {
      margin-top: 0.625rem;
      padding-left: 0;
    }
  }
`;
export const ContainerCentral = styled.form`
  margin: 0 auto;
  p {
    margin: 5rem 0 0.9375rem;
    font-size: 1.25rem;
    text-align: center;
  }
  button {
    cursor: pointer;
    display: flex;
    margin: 1.25rem auto;
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
    font-variant: small-caps;
  }
  @media screen and (max-width: 30rem) {
    p {
      margin: 3.125rem 0 0.9375rem;
    }
  }
`;
export const Input = styled.input`
  width: 20rem;
  height: 2.75rem;
  padding: 0 0.5rem;
  border-radius: 0.3rem;
  font-family: "Combo";
  font-variant: small-caps;
  font-size: 1rem;
  background-color: transparent;
  border: 0.125rem solid #191970;
`;
