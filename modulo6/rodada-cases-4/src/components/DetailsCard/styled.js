import styled from "styled-components";

export const MovieInfo = styled.div`
  h1 {
    font-size: 32px;
    margin-top: 70px;
    justify-content: left;
    text-align: left;
  }
  h2 {
    display: flex;
    flex-direction: row;
    margin: 3px 0 15px;
    font-size: 18px;
    font-weight: 100;
    align-items: center;
    gap: 7px;
  }
  h3 {
    font-size: 22px;
    margin-bottom: 5px;
  }
  p {
    text-align: justify;
    font-size: 18px;
    font-weight: 100;
  }
  span {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    h2 {
      margin-top: 20px;
    }
  }
`;
export const ProgressBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
  gap: 11px;
  .CircularProgressbar .CircularProgressbar-text {
    dominant-baseline: middle;
    text-anchor: middle;
    font-size: 30px;
  }
`;
