import React from "react"
import PlaylistsDetails from "../PlaylistDetails/PlaylistDetails"
import {HiOutlineTrash} from 'react-icons/hi'
import {
  Playlists,
  PlaylistCard,
  ImgPlaylist,
  HeadingPlaylist,
  PlaylistsContainer,
} from "./StyledUserPlaylist"

export default class UserPlaylists extends React.Component {
  state = {
    page: false,
  }
  componentDidMount() {
    this.props.getAllPlaylists();
  }
  randomNumber() {
    return Math.floor(Math.random() * 100);
  }
  playlistsScreen = () => {
    this.setState({ page: !this.state.page });
  }
  render() {
    const cardPlaylist = this.props.playlists.map((list, index) => {
      return (
          <Playlists key={index}
            onClick={() => this.props.getPlaylistTracks(list.id, list.name)}
          >
            <PlaylistCard onClick={() => this.props.pageDetails()}>
              <ImgPlaylist
                src={`https://jpimg.com.br/uploads/2017/11/archives/2017/09/29/236086929-tell-me-you-love-me-demi-lovato-volta-mais-sincera-e-ousada-do-que-nunca-reproducao.jpg`}
                alt="Imagem"
              />
              <HeadingPlaylist>{list.name}</HeadingPlaylist>
            </PlaylistCard>
          </Playlists>
      )
    })
    return (
      <div>
        {this.state.page ? (
            <PlaylistsDetails
              pagePlaylists={this.pagePlaylists}
              pageDetails={this.pagePlaylistsDetails}
              pageCreate={this.pageCreatePlaylists}
              pageAdd={this.pageAddTracks}
              playlistName={this.state.playlistName}
              playlistId={this.state.playlistId}
              tracks={this.state.tracks}
              getPlaylistTracks={this.getPlaylistTracks}
              getAllPlaylists={this.getAllPlaylists}
              deletePlaylist={this.deletePlaylist}
            />
        ) : (
          <PlaylistsContainer>{cardPlaylist}</PlaylistsContainer>
        )}
      </div>
    )
  }
}