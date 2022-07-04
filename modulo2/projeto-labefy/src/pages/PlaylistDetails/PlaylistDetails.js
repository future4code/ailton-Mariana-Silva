import React from "react"
import axios from "axios"
import AddTrack from "../AddTracks/AddTracks"
import Swal from 'sweetalert2'
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import {HiOutlineTrash} from 'react-icons/hi'
import { BASE_URL } from "../../constants/urls"
import { HEADERS } from "../../constants/headers"
import {
  PlaylistContainer,
  TrackContainer,
  TrackCard,
  BackButton,
  TracksListContainer,
  ButtonAddTrack,
  MainContainer,
} from "./StyledDetails"
export default class PlaylistsDetails extends React.Component {
state = {
  addTrackOpen: false,
}
openAddTrack = () => {
  this.setState({
    addTrackOpen: true,
  })
}
closeAddTrack = (event) => {
  this.setState({
    addTrackOpen: false,
  })
}
componentDidMount() {
  this.props.getAllPlaylists();
}
randomNumber() {
  return Math.floor(Math.random() * 100);
}
removeTrackFromPlaylist = async (id) => {
  const question = window.confirm(
    "Tem certeza que deseja deletar esta música?"
  )
  if (question) {
    try {
      const res = await axios.delete(
        `${BASE_URL}/${this.props.playlistId}/tracks/${id}`,
        HEADERS
      )
     Swal.fire("", "Música Deletada com Sucesso!", "success");
      this.props.getPlaylistTracks(this.props.playlistId);
    } catch (err) {
      Swal.fire("", "Ops! Algo deu Errado - Tente Novamente!", "error");
    }
  }
}
render() {
  const showTracks = this.props.tracks.map((tracks) => {
    return (
      <TrackContainer key={tracks.id}>
        <p>
        <strong>Nome da música:</strong> {tracks.name}
        </p>
        <p>
        <strong>Artista:</strong> {tracks.artist}
        </p>
        <TrackCard
          src={tracks.url}
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          title="Song"
        />
        <button onClick={() => this.removeTrackFromPlaylist(tracks.id)}>
          Deletar Música
        </button>
      </TrackContainer>
    )
  })
  return (
    <div>
      {this.state.addTrackOpen && (
        <div>
          <AddTrack
            getPlaylistTracks={this.props.getPlaylistTracks}
            playlistId={this.props.playlistId}
            closeAddPage={this.closeAddTrack}
          />
        </div>
      )}
      <div>
        <BackButton>
        <MdOutlineArrowBackIosNew
            onClick={this.props.pagePlaylists}
          />
        </BackButton>
        <PlaylistContainer>
          <li>{this.props.playlistName}</li>
            <li><HiOutlineTrash
              onClick={() => this.props.deletePlaylist(this.props.playlistId)}
            /></li>
        </PlaylistContainer>
      </div>
      {this.props.tracks.length === 0 && (
        <MainContainer>
          <h4>Sua playlist está vazia </h4>
          <div>
            <ButtonAddTrack onClick={this.openAddTrack}>
              Adicionar Musica
            </ButtonAddTrack>
          </div>
        </MainContainer>
      )}
      {this.props.tracks.length > 0 && (
        <div>
          <div>
            <ButtonAddTrack onClick={this.openAddTrack}>
              Adicionar Musica
            </ButtonAddTrack>
          </div>
          <TracksListContainer>{showTracks}</TracksListContainer>
        </div>
      )}
    </div>
  )
}
}