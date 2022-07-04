import styled from "styled-components"

export const PlaylistContainer = styled.div`
  height: 13rem;
  background: #181818;
  display: flex;
  align-items: flex-end;
  li {
    list-style: none;
    font-size: 46px;
    margin: 1.4rem 0 4rem;
    color: white;
    margin: auto;
  }
  @media (max-width: 480px) {
      li {
        font-size: 36px;
        text-align: center;
      }
  }
`
export const TrackContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      cursor: pointer;
      margin-top: 10px;
      padding: 0.2rem 0.4rem;
      border-radius: 6px;
      border: none;
      color: black;
      background-color: white;
      text-align: center;
      :hover {
        opacity: 0.8;
      }
    }
    p{
      color: white;
      font-size: 15px;
      width: 80%;
      word-wrap: break-word;
      margin: 5px;
      display: none;
    }
`
export const TrackCard = styled.iframe`
    cursor: pointer;
    color: white;
    width: 90%;
    height: 80px;
    border: 0px;
    margin: 1rem 1rem 0.1rem;
`
export const BackButton = styled.div`
  color: white;
  position: fixed;
  display: flex;
  align-items: center;
  margin: 0.6rem 1.8rem 0;
  font-size: 35px;
  :hover {
        opacity: 0.8;
  }
`
export const TracksListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  } 
`
export const ButtonAddTrack = styled.button`
  cursor: pointer;
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  color: black;
  background-color: white;
  display: flex;
  :hover {
        opacity: 0.8;
  }
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  margin-top: 5rem;
  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: white;
  }
    @media (max-width: 480px) {
      align-items: center;
      text-align: center;

    h4 {
      font-size: 26px;
    }
  }
`