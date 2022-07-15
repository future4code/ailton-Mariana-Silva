import styled from "styled-components";

export const MatchesContainer = styled.ul`
  height: 100%;
  padding: 0;
  width: 98%;
  color: white;

  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(217, 217, 217);
    border-radius: 10px;
    padding-right: 10px;
  }

  ul {
    padding-left: 10px;
  }

  h2 {
    text-align: center;
    color: white;
  }
  .reset {
    cursor: pointer;
    margin-left: 34%;
    height: 23px;
    background-color: black;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    :hover {
      background-color: grey;
    }
  }
`;
export const Photo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 5%;
  background-size: cover;
  background-image: url(${(props) => props.photo});
  background-position: ${(props) =>
    props.name === "Joker" ? "center left" : "center top"};
`;
export const Match = styled.li`
  padding: 8px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  &:hover {
    background-color: grey;
  }
`;
