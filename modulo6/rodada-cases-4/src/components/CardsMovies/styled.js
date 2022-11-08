import styled from "styled-components";

export const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
export const CardMovie = styled.div`
  margin: 15px;
  img {
    width: 300px;
    height: 400px;
    box-sizing: border-box;
  }
  h1 {
    font-size: 20px;
    width: 300px;
    font-weight: 900;
  }
  p {
    margin-top: 4px;
    font-size: 18px;
    font-weight: 700;
    color: darkgrey;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.2s;
  }
`;
export const NotFound = styled.h1`
  margin: 40px auto 15px;
  font-size: 2.625rem;
  text-align: center;
  text-shadow: 0.125rem 0.125rem white;
  color: #5c16c5;
  font-family: "Combo";
  font-variant: small-caps;
  text-shadow: 0.3125rem 0.3125rem 0.125rem white,
    0.125rem 0.125rem 0.625rem #5c16c5;
`;
