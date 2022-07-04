import React from "react"
import axios from "axios"
import Swal from 'sweetalert2'
import { BASE_URL } from "../../constants/urls"
import { HEADERS } from "../../constants/headers"
import { AddContainer, MainContainer } from "./StyledAddTracks"
export default class AddTrack extends React.Component {
state = {
  name: "",
  artist: "",
  urlTrack: "",
}
onChangeName = (event) => {
  this.setState({ name: event.target.value });
}
onChangeArtist = (event) => {
  this.setState({ artist: event.target.value });
}
onChangeURL = (event) => {
  this.setState({ urlTrack: event.target.value });
}
addTrackToPlaylist = async (id) => {
  const body = {
    name: this.state.name,
    artist: this.state.artist,
    url: this.state.urlTrack,
  };
  try {
    const res = await axios.post(
      `${BASE_URL}/${this.props.playlistId}/tracks`,
      body,
      HEADERS
      )
      Swal.fire("", "Música Adicionada com Sucesso!", "success");
      this.setState({ name: "", artist: "", urlTrack: "" });
      this.props.getPlaylistTracks(this.props.playlistId);
    } catch (err) {
      Swal.fire("", "Ops! Algo deu Errado - Tente Novamente!", "error");
    }
  }
  inputEnter = (event) => {
    if (event.key === 'Enter') {
        this.addTrackToPlaylist();
    }
  }
  render() {
    return (
    <AddContainer>    
        <MainContainer>
          <input
            placeholder={"Digite o Nome da Música"}
            value={this.state.name}
            onChange={this.onChangeName}
            onKeyPress={this.inputEnter}
          />
          <input
            placeholder={"Digite o Nome do Artista"}
            value={this.state.artist}
            onChange={this.onChangeArtist}
            onKeyPress={this.inputEnter}
          />
          <input
            placeholder={"Digite url da Música"}
            value={this.state.urlTrack}
            onChange={this.onChangeURL}
            onKeyPress={this.inputEnter}
          />
          <button onClick={() => this.addTrackToPlaylist()}>Adicionar</button>
        </MainContainer>     
    </AddContainer>
  )
}
}