import styled from "styled-components";

export const Section = styled.section`
  margin: 0 auto;
  text-align: center;
  width: 330px;
  min-height: 300px;
  height: 95%;
  background-color: black;
  display: flex;
  flex-direction: column;
  user-select: none;
`;
export const CardContainer = styled.div`
  height: 90%;
  h4 {
    text-align: center;
    svg {
      color: blue;
    }
    margin: 12px;
  }
  p {
    text-align: justify;
  }

  hr {
    width: 100%;
  }

  h3 {
    text-align: center;
    margin-top: 50%;
    color: white;
  }
  button {
    display: block;
    margin: 0 auto;
  }
  .reset {
    cursor: pointer;
    margin-top: 23px;
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
export const Buttons = styled.div`
  margin-top: 10px;
  .like {
    cursor: pointer;
    color: green;
    padding-left: 30px;
    font-size: 60px;
  }
  .dislike {
    cursor: pointer;
    color: red;
    padding-right: 30px;
    font-size: 57px;
  }
`;
export const Photo = styled.div`
  margin: 0 auto;
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 600px;
  background-image: url(${(props) => props.photo});
  background-position: ${(props) =>
    props.name === "Joker" ? "center left" : "center top"};
  background-size: cover;
  justify-content: end;
`;
export const Bio = styled.div`
  padding: 10px;
  color: white;
  height: 100px;
  text-align: justify;
  text-shadow: #000 1px -1px, #000 -1px 1px, #000 1px 1px, #000 -1px -1px;
`;
