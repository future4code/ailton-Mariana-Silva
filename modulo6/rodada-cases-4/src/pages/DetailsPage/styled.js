import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  background-color: #2d0c5e;
  color: white;
  min-height: 600px;
  img {
    border-radius: 8px;
    position: absolute;
    width: 380px;
    height: 574px;
    left: 80px;
    top: 128px;
  }
  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    img {
      border-radius: 8px;
      width: 340px;
      height: 534px;
      align-items: center;
      margin: auto;
    }
  }
  @media screen and (max-width: 480px) {
    display: flex;
    img {
      width: 286px;
      height: 400px;
      align-items: center;
      margin: auto;
      position: initial;
    }
  }
`;
export const InfoFilm = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 40px 0 480px;
  @media screen and (max-width: 480px) {
    margin: 0;
  }
  @media screen and (max-width: 480px) {
    padding: 16px;
    width: 90%;
    margin: 0;
  }
`;
