import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-height: 96vh;
  max-width: 1120px;
  width: 96vw;
  gap: 8px;
  padding: 16px 0px;
  margin: 0 auto;
  border-radius: 8px;
`;
export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  user-select: none;
  @media screen and (max-width: 800px) {
    display: grid;
    justify-content: center;
    gap: 12px;
  }
`;
export const TitlePage = styled.h1`
  margin-top: 10px;
  font-size: 42px;
  text-align: center;
  text-shadow: 3px 3px 2px Blue, 4px 4px black;
  text-align: center;
  color: white;
  grid-area: 1/1/2/4;
  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
`;
export const Button = styled.h2`
  cursor: pointer;
  padding: 20px;
  text-align: center;
  font-size: 42px;
  color: white;
  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  img {
    width: 100px;
  }
`;

export const BoxCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px;
  border-radius: 5px;
  gap: 20px;
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
    background: #191970;
    border-radius: 3px;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  padding: 12px;
  border-radius: 5px;
  background-color: rgba(0, 0, 178, 0.4);
  word-wrap: break-word;
  word-break: break-all;
  color: white;
  :hover {
    background-color: #191970;
  }
`;
export const Title = styled.h2`
  font-size: 24px;
  color: white;
`;

export const DeleteButton = styled.h4`
  padding: 0 10px;
  font-size: 22px;
  cursor: pointer;
`;
