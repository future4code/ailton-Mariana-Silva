import React from "react"
import axios from "axios"
import Swal from 'sweetalert2'
import { BASE_URL } from "../../constants/urls"
import { HEADERS } from "../../constants/headers"
import { MainContainer } from "./StyledCreatePlaylist"
export default class CreatePlaylists extends React.Component {
state = {
  playlist: "",
}
onChangePlaylistName = (event) => {
  this.setState({ playlist: event.target.value });
}
createPlaylist = async () => {
  const body = { name: this.state.playlist 
  }
  try {
    const res = await axios.post(BASE_URL, body, HEADERS);
    Swal.fire("", "A Playlist foi criada com sucesso!", "success");
    this.setState({ playlist: "" });
    this.props.getAllPlaylists();
  } catch (err) {
    Swal.fire("", "Ops! Algo deu Errado - Tente Novamente!", "error");
  }
}
inputEnter = (event) => {
  if (event.key === 'Enter') {
      this.createPlaylist();
  }
}
render() {
  return (
    <div>
      <MainContainer>
        <h2>Crie uma nova playlist</h2>
        <input
          placeholder={"Digite o nome da sua PlayList"}
          value={this.state.playlist}
          onChange={this.onChangePlaylistName}
          onKeyPress={this.inputEnter}
        />
        <button onClick={this.createPlaylist}>Criar Playlist</button>
      </MainContainer>
    </div>
  )
}
}