import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-height: 96vh;
  width: 96vw;
  padding: 8px 0px;
  border-radius: 5px;

  hr {
    margin: 20px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  user-select: none;
  font-size: 30px;
  gap: 12px;
  path {
    color: white;
  }
`;

export const TitlePage = styled.h2`
  font-size: 42px;
  text-align: center;
  text-shadow: 3px 3px 2px blue, 4px 4px black;
  text-align: center;
  color: white;
  @media screen and (max-width: 800px) {
    font-size: 36px;
    margin-top: 12px;
  }
`;
export const BoxCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 98%;
  margin: 0 auto;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 178, 0.4);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: #191970;;
    border-radius: 3px;
  }
p{
  padding-bottom: 8px;
}

`;
export const Card = styled.div`
  background-color: rgba(25, 25, 112, 0.4);
  width: 80%;
  min-height: 480px;
  padding: 10px;
  border-radius: 5px;
  word-wrap: break-word;
  color: white;
  :hover {
    background-color: #191970;
  }
  @media screen and (max-width: 480px) {
    width: 400px;
    height: 500px;
  }
`;
export const TitleCard = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: 16px;
  text-shadow: 3px 3px 2px black, 3px 3px blue;
  color: white;
`;
export const Title = styled.h1`
  margin: 10px 0;
  font-size: 24px;
  text-align: left;
  text-shadow: 3px 3px 2px black, 3px 3px blue;
  font-weight: 900;
  color: white;
`;

export const Button = styled.button `margin: 0 5px;
font-size: 13px;
font-weight: bold;
width: 80px;
height: 28px;
text-shadow: 1px 1px blue;
box-shadow: 0px 0px 1px 1px white, 0 0 0 3px blue;
border-radius: 5px;
cursor: pointer;
`
