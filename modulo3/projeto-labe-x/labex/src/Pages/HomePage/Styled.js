import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
`;
export const Title = styled.h1`
  font-size: 180px;
  text-align: center;
  text-shadow: 2px 2px black;
  color: white;
  text-shadow: 5px 5px 2px black, 7px 7px 10px blue;
  @media screen and (max-width: 620px) {
    font-size: 120px;
  }
`;
export const DivButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 0 5px;
    font-size: 24px;
    font-weight: bold;
    width: 140px;
    height: 40px;
    text-shadow: 1px 1px blue;
    box-shadow: 0px 0px 1px 1px white, 0 0 0 3px blue;
    border-radius: 5px;
    cursor: pointer;
  }
`;
