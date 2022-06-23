import React from 'react'
import axios from "axios"
import styled from 'styled-components'

const DetalhesUsuario = styled.div`
  display: block;
  border: 1px solid black;
  border-radius: 5px;
  width: 30%;
  height: 130px;
  margin: 10px;
  margin:0 auto;
  padding: 10px;
  box-shadow: 1px 2px 10px black;
  @media screen and (max-width: 480px) {
    width: 90%;   
  }
`
const Voltar = styled.button`
  cursor:pointer;
  margin: 0 auto;
  padding: 5px 8px;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  display: block;
  align-items: center;
  justify-content: center; 
`
class DetalhesDoUsuario extends React.Component {
    state = {
        detalhesUsuario: {}
    }
    componentDidMount() {
        this.getDetalhesUsuario();
    }
    getDetalhesUsuario = () => {
        axios
          .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`,
            {
                headers: {
                  Authorization: "mariana-silva-ailton",
                }
            }
          )
          .then((response) => {
            this.setState({ detalhesUsuario: response.data });
          })
          .catch((error) => {
            console.log(error.message);
            alert("Ocorreu um erro! Tente Novamente.")
          })
      }
	render() {
		return <DetalhesUsuario>
            <div>
                <p><b>Nome</b>: {this.state.detalhesUsuario.name}</p>
                <p><b>E-mail</b>: {this.state.detalhesUsuario.email}</p>
            <Voltar onClick={this.props.goToListaUsuarios}>
          Voltar
        </Voltar>
            </div>
		</DetalhesUsuario>
	}
}
export default DetalhesDoUsuario