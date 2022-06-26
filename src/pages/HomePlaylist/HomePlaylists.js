import React from "react"
import {ImSpotify} from "react-icons/im"
import { SpotifyContainer, Title, SpotifyItems } from "./StyledHomePlaylist"

export default class HomePlaylists extends React.Component {
  render() {
    return (
        <SpotifyContainer>
          <h2>Labefy <ImSpotify/></h2>
          <Title>Tocado Recentemente</Title>
          <SpotifyItems
            src="https://open.spotify.com/embed/playlist/1TOG1tFaPCw1iOehaXjLO1?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="PlaylistSpotify"
          />
          <SpotifyItems
            src="https://open.spotify.com/embed/playlist/57aAKQNdaaPlg5NkMS8ycx?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="PlaylistSpotify"
          />
          <SpotifyItems
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9VAqVAZ6EMr?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="PlaylistSpotify"
          />
          <SpotifyItems
            src="https://open.spotify.com/embed/artist/6S2OmqARrzebs0tKUEyXyp?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="PlaylistSpotify"
          />
          <SpotifyItems
            src="https://open.spotify.com/embed/playlist/0bfaeSoz0Kg1CL29nliMxe?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="PlaylistSpotify"
          />
          <SpotifyItems
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO47cwRq?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="PlaylistSpotify"
          />
        </SpotifyContainer>
    )
  }
}