import React from "react";
import axios from "axios";
import styled from "styled-components";
import Detalhes from "../../components/Detalhes/Detalhes";

const ListaDeUsuarios = styled.div`
  display: flex;
  justify-content: center;

  h2{
    text-align: center;
  }
`
const Lista = styled.div`
  cursor: pointer;
  display: flex;
  padding: 10px;
  margin: 10px auto;
  align-items: center;
  font-size: 20px;
  justify-content: space-between;
  border-bottom: 1px dashed black;
  border-top: 1px dashed black;
  width: 300px;
  p {
    width: 100%;
    margin: 0;
  }
`
const ButtonRemove = styled.button`
  cursor: pointer;
    color: white;
    background-color: gray;
    margin: 10px;
    justify-content: center;
    &:hover {
    color: black;
  }
`
class ListaUsuarios extends React.Component {
    state = {
    page: "listaUsuarios",
    userId: "",
    userName: "",
  }
  componentDidUpdate() {
    this.mudarPagina();
  }
  delete = async (user) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`;
    const headers = {
      headers: {
        Authorization: "mariana-silva-ailton",
      },
    }
    if (
      window.confirm(`Tem certeza que deseja remover ${user.name} da lista?`)
    ) {
      try {
        const response = await axios.delete(url, headers);
        alert(`${user.name} removido com sucesso!`);
        this.props.getUserlists();
      } catch (error) {
        alert("Ocorreu um erro! Tente Novamente.");
      }
    }
  }
  goToListaUsuarios = () => {
    this.setState({ page: "listaUsuarios", userId: "" });
  }
  mudarPagina = () => {
    if (this.state.page === "detalhes") {
      return (
        <Detalhes
          userId={this.state.userId}
          userName={this.state.userName}
          goToListaUsuarios={this.goToListaUsuarios}
          getUserlists={this.props.getUserlists()}
        />
      )
    }
  }
  render() {
    const goToDetalhes = (user) => {
      this.setState({ page: "detalhes", userId: user.id, userName: user.name });
    }
    const listaUsuarios = this.props.listUser.map((user) => {
      return (
        <Lista key={user.id}>
          <div onClick={() => goToDetalhes(user)}>
            <p>{user.name}</p>
          </div>
          <ButtonRemove onClick={() => this.delete(user)}>X</ButtonRemove>
        </Lista>
      )
    })
    return (
      <ListaDeUsuarios>
        {this.state.page === "listaUsuarios" ? (
          <div>
            <h2>Lista de Usuários</h2>
            {listaUsuarios}
          </div>
        ) : (
          this.mudarPagina()
        )}
      </ListaDeUsuarios>
    )
  }
}
export default ListaUsuarios