import React from "react";
import {AiFillHome} from "react-icons/ai"
import {BsSearch} from "react-icons/bs"
import {BiLibrary} from "react-icons/bi"
import {BsPlusSquareFill} from "react-icons/bs"
import {ImHeart} from "react-icons/im"
import {ImSpotify} from "react-icons/im"
import Swal from 'sweetalert2'
import {
  Container,
  Logo,
  FirstContainer,
  FirstContainerItem,
  SecondContainer,
  SecondContainerItem,
  ContainerItems,
  MenuMobile,
} from "./StyledSidebar"

const loading = () => {
  Swal.fire("", "Estamos Trabalhando nessa Ferramenta!", "error");
}
export default class Sidebar extends React.Component {
  componentDidMount() {
    this.props.getAllPlaylists();
  }
  render() {
    return (
      <Container>
        <ContainerItems>
        <Logo>
        <ImSpotify/>
            <h1 onClick={() => this.props.pageHome()}>Labefy</h1>
            </Logo>
          <FirstContainer>
            <FirstContainerItem onClick={() => this.props.pageHome()}>
            <AiFillHome/>
              <h4>Início</h4>
            </FirstContainerItem>
            <FirstContainerItem onClick={() => loading()}>
            <BsSearch/>
              <h4>Buscar</h4>
            </FirstContainerItem>
            <FirstContainerItem onClick={() => this.props.pagePlaylists()}>
            <BiLibrary/>
              <h4>Sua Biblioteca</h4>
            </FirstContainerItem>
          </FirstContainer>
          <SecondContainer>
            <SecondContainerItem onClick={() => this.props.pageCreate()}>
              <BsPlusSquareFill/>
              <h4>Criar playlist</h4>
            </SecondContainerItem>
            <SecondContainerItem onClick={() => loading()}>
            <ImHeart/>
              <h4>Músicas Curtidas</h4>
            </SecondContainerItem>
          </SecondContainer>
          <hr />
        <MenuMobile>
          <AiFillHome
          onClick={() => this.props.pageHome()} 
          />
          <BsSearch
          onClick={() => loading()}
          />
          <BsPlusSquareFill
          onClick={() => this.props.pageCreate()}
          />
          <ImHeart
          onClick={() => loading()}
          />
          <BiLibrary
          onClick={() => this.props.pagePlaylists()}
          />
        </MenuMobile>
        </ContainerItems>
      </Container>
    )
  }
}