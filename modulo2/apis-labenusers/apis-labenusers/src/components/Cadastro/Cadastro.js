import React from "react";
import styled from "styled-components";
import axios from "axios";

const CriarUsuario = styled.div`
  display: block;
  border: 1px solid black;
  border-radius: 5px;
  width: 30%;
  height: 200px;
  margin: 10px;
  margin:0 auto;
  box-shadow: 1px 2px 10px black;
  h2 {
    text-align: center;
  }
  @media screen and (max-width: 1090px) {
    width: 90%;
  }
`
const Input = styled.input`
  margin: 8px auto;
  padding: 5px 8px;
  border-radius: 5px;
  align-items: center;
`
const Enviar = styled.button`
  margin: 0 auto;
  padding: 5px 8px;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  display: block;
  align-items: center;
  justify-content: center;
  cursor: pointer; 
`
class CadastrarUsuario extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
  }
  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value});
  }
  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value});
  }
  createUsers = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    }
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "mariana-silva-ailton",
          },
        }
      )
      .then((response) => {
        this.props.getUserlists();
        alert("Cadastro Realizado com Sucesso!");
      })
      .catch((error) => {
        if(error.response.data.message === 'Invalid email'){
            alert("E-mail invalido.")
        }
        else{
            alert("Por favor, preencha todos os campos e verifique seus dados")
        }
        console.log(error.message);
        alert("Ocorreu um erro! Tente Novamente.");
      })
  }
  render() {
    return (
      <CriarUsuario>
        <section>
          <h2>Cadastrar Usuário</h2>
          <Input
            type={"text"}
            value={this.state.inputName}
            onChange={this.onChangeInputName}
            placeholder={"Digite seu Nome"}
          />
          <Input
            type={"email"}
            value={this.state.inputEmail}
            onChange={this.onChangeInputEmail}
            placeholder={"Digite seu E-mail"}
          />
          <Enviar onClick={this.createUsers}>Enviar Formulário</Enviar>
        </section>
      </CriarUsuario>
    )
  }
}
export default CadastrarUsuario