import styled from "styled-components";

export const CardSection = styled.div`
  border: solid transparent;
  box-shadow: 0.0625rem 0.1875rem 0.1875rem 0.25rem rgba(0, 0, 0, 0.25);
  background-color: lightblue;
  border-radius: 0.625rem;
  margin: 0 auto;
`;
export const BorderCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.4rem;
  justify-content: space-evenly;
`;
export const Cards = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20.625rem;
  width: 15rem;
  border-radius: 0.625rem;
  margin: 1.875rem auto;
  box-shadow: 0 0 0.3125rem black;
  background-color: white;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 12.5rem;
    height: 18.75rem;
  }
`;
