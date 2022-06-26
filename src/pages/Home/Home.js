import React from "react"
import axios from "axios"
import HomePlaylists from "../HomePlaylist/HomePlaylists"
import UserPlaylists from "../UserPlaylist/UserPlaylists"
import PlaylistsDetails from "../PlaylistDetails/PlaylistDetails"
import CreatePlaylists from "../CreatePlaylist/CreatePlaylist"
import Sidebar from "../Sidebar/Sidebar"
import Swal from 'sweetalert2'
import { BASE_URL } from "../../constants/urls"
import { HEADERS } from "../../constants/headers"
import { HomePage, MainContainer } from "./StyledHome"
export default class Home extends React.Component {
state = {
  playlists: [],
  playlistName: "",
  playlistId: "",
  tracks: [],
  page: "home",
}
componentDidMount() {
  this.getAllPlaylists()
}
getAllPlaylists = async () => {
  try {
    const res = await axios.get(BASE_URL, HEADERS)
    this.setState({ playlists: res.data.result.list })
  } catch (err) {
    console.log(err.message)
  }
}
deletePlaylist = async (id) => {
  const question = window.confirm(
    "Tem certeza que deseja deletar esta playlist?"
  )
  if (question) {
    try {
      const res = await axios.delete(`${BASE_URL}/${id}`, HEADERS);
      Swal.fire("", "Playlist deletada com sucesso!", "success");
      this.getAllPlaylists();
      this.pagePlaylists();
    } catch (err) {
      console.log(err.message);
    }
  }
}
getPlaylistTracks = async (id, name) => {
  try {
    const res = await axios.get(`${BASE_URL}/${id}/tracks`, HEADERS);
    this.setState({
      tracks: res.data.result.tracks,
      playlistName: name,
      playlistId: id,
      page: this.state.page,
    })
    console.log(this.state.tracks);
  } catch (err) {
    console.log(err.response.data.message);
  }
}
renderPages = () => {
  switch (this.state.page) {
    case "home":
      return <HomePlaylists />
    case "playlists":
      return (
        <UserPlaylists
          pagePlaylists={this.pagePlaylists}
          pageDetails={this.pagePlaylistsDetails}
          pageAdd={this.pageAddTracks}
          playlistName={this.state.playlistName}
          playlistId={this.state.playlistId}
          tracks={this.state.tracks}
          getPlaylistTracks={this.getPlaylistTracks}
          getAllPlaylists={this.getAllPlaylists}
          playlists={this.state.playlists}
          deletePlaylist={this.deletePlaylist}
        />
      )
    case "details":
      return (
        <PlaylistsDetails
          pagePlaylists={this.pagePlaylists}
          pageDetails={this.pagePlaylistsDetails}
          pageAdd={this.pageAddTracks}
          playlistName={this.state.playlistName}
          playlistId={this.state.playlistId}
          tracks={this.state.tracks}
          getPlaylistTracks={this.getPlaylistTracks}
          getAllPlaylists={this.getAllPlaylists}
          deletePlaylist={this.deletePlaylist}
        />
      )
    case "create":
      return (
        <CreatePlaylists
          pagePlaylists={this.pagePlaylists}
          pageDetails={this.pagePlaylistsDetails}
          getAllPlaylists={this.getAllPlaylists}
        />
      )
    default:
      return;
  }
}
pageHome = () => {
  this.setState({ page: "home" })
}
pagePlaylists = () => {
  this.setState({ page: "playlists" })
}
pagePlaylistsDetails = () => {
  this.setState({ page: "details" })
}
pageCreatePlaylists = () => {
  this.setState({ page: "create" })
}
pageAddTracks = () => {
  this.setState({ page: "add" })
}
render() {
  return (
    <div>
    <HomePage>
      <Sidebar
        pagePlaylists={this.pagePlaylists}
        pageDetails={this.pagePlaylistsDetails}
        pageCreate={this.pageCreatePlaylists}
        getPlaylistTracks={this.getPlaylistTracks}
        getAllPlaylists={this.getAllPlaylists}
        playlists={this.state.playlists}
        pageHome={this.pageHome}
      />
      <MainContainer>{this.renderPages()}</MainContainer>
    </HomePage>
    </div>
  )
}
}