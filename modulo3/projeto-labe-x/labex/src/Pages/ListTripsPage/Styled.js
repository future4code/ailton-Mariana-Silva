import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-height: 96vh;
  width: 96vw;
  padding: 8px 0px;
  border-radius: 5px;
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

export const Title = styled.h1`
  font-size: 42px;
  text-align: center;
  text-shadow: 3px 3px 2px  blue, 4px 4px black;
  text-align: center;
  color: white;
`;
export const Button = styled.h2`
  cursor: pointer;
  text-shadow: 3px 3px 2px black, 4px 4px blue;
  font-size: 32px;
  font-weight: 900;
  color: white;
`;

export const BoxCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  gap: 20px;
  width: 98%;
  margin: 0 auto;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(25, 25, 112, 0.4);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: #191970;
    border-radius: 3px;
  }
`;
export const Card = styled.div`
  background-color: rgba(25, 25, 112, 0.4);
  min-height: 280px;
  width: 330px;
  padding: 10px;
  border-radius: 5px;
  word-wrap: break-word;
  color: white;
  :hover {
    background-color:#191970;
  }
`;
export const TitleCard = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
  text-shadow: 3px 3px 2px black, 3px 3px blue;
  color: white;
`;
