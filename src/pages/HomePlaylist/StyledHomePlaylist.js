import styled from "styled-components"

export const SpotifyContainer = styled.div`
  padding: 4rem 2rem 2rem;
  h2 {
    display: none;
  }
  @media (max-width: 480px) {
    h2 {
      display: block;
      color: white;
      text-align: center;
      font-size: 40px;
      margin-top: 1px;
    }
  }
`
export const Title = styled.h1`
  margin-left: 1rem;
  font-size: 38px;
  color: white;
  @media (max-width: 480px) {
    font-size: 21px;
    margin: 1px;
    margin-bottom: 20px;
  }
`
export const SpotifyItems = styled.iframe`
  width: 30%;
  height: 80px;
  border: 0px;
  margin: 20px 15px 5px;
`