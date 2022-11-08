import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  box-shadow: 0.01rem 0.02rem 0.7rem 0.05rem rgba(0, 0, 0, 0.25);
  font-family: "Combo";
  background-color: white;
  font-variant: small-caps;
  img {
    width: 5.5rem;
  }
  p {
    width: 9.375rem;
    font-size: 1.1875rem;
    align-items: center;
    text-align: center;
    color: #191970;
  }
  .button {
    margin: 0;
    width: 9rem;
    align-items: center;
    text-align: center;
    background-color: transparent;
    color: #191970;
    border: 0.0625rem solid #191970;
  }
`;
