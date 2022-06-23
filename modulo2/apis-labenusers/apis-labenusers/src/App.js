import React from "react"
import axios from "axios"
import CadastrarUsuario from "./components/Cadastro/Cadastro"
import UsersList from "./components/Lista/Lista"
import LogoImg from './img/logo.png'
import styled from "styled-components"

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-bottom: 1px solid black; */
  font-size: 18px;
  h1 {
    margin: 10px;
  }
`
  const Logo = styled.img`
  width: 30px;
  align-items: center;
  justify-content: center;
`
const TrocaPagina = styled.button`
  padding: 5px;
  margin-bottom: 10px;
  margin-left: 15px;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  display: inline;
`
const Box = styled.div`
  display: block;
  padding-top: 10px;
  align-items: center;
  background-color: white;

  input {
    width: 300px;
    align-items: center;
    display: block;
  }
`
const Footer = styled.footer`
  position: fixed;
  width: 100%;
  padding-bottom: 10px;
  bottom: 0;
  text-align: center;
  font-weight: bold;
  /* border-top: 1px solid black; */
  h3 {
    margin: 0;
  }
`
class App extends React.Component {
    state = {
    listUser: [],
    currentPage: "cadastrarUsuario",
  }

  changePage = () => {
    if (this.state.currentPage === "cadastrarUsuario") {
      this.setState({ currentPage: "usersList" })
  } else {
      this.setState({ currentPage: "cadastrarUsuario" })
    }
  }

  componentDidMount() {
    this.getUserlists();
  }

  getUserlists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "mariana-silva-ailton",
          }
        }
      )
      .then((response) => {
        this.setState({ listUser: response.data });
      })
      .catch((error) => {
        console.log(error.message);
        alert("Ocorreu um erro! Tente novamente.");
      });
  };

  render() {
    return (
<div>
      <Header> 
        <h1>Labenusers</h1>
        <Logo src={LogoImg} alt="Logo"/>
        </Header>

      <Box>
      <TrocaPagina onClick={this.changePage}>
          {this.state.currentPage === "cadastrarUsuario"
            ? "Lista de Usuários"
            : "Cadastro de Usuário"}
        </TrocaPagina>

        {this.state.currentPage === "cadastrarUsuario" ? (
          <CadastrarUsuario getUserlists={this.getUserlists} />
        ) : (
          <UsersList
            listUser={this.state.listUser}
            getUserlists={this.getUserlists}
          />
        )}
      
      </Box> 
      <Footer>
        <h3>Apis Labenusers</h3>
      </Footer> 
      </div>
    )
  }
}
export default App