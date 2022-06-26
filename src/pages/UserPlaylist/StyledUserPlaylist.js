import styled from "styled-components"

export const Playlists = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  width: 10rem;
  height: 14rem;
  margin: 20px 0 5px;
  border-radius: 10px;
  box-shadow: white 1px 2px 3px 1px; 
`
export const PlaylistCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 5px;
  color: white;
  h4 {
    margin-top: 5px;
    font-size: 20px;
  }
`
export const ImgPlaylist = styled.img`
  width: 90%;
`
export const HeadingPlaylist = styled.h4`
  word-wrap: break-word;
  font-size: 18px;
`
export const PlaylistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 1rem 0.5rem 1rem 4rem;
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr)   
} 
`