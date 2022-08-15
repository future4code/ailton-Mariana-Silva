import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { goToFeedPage } from "../../routes/coordinator";
import { GradientButton, Input } from "../../constants/generalStyled";
import { BlueText, BlackText, Label, TextContainer } from "./styled";
import Swal from "sweetalert2";

const SignUpForm = () => {
  const signUp = (body, navigate) => {
    axios
      .post(`${BASE_URL}/users/signup`, body)
      .then((res) => {
        Swal.fire("Cadastro realizado com sucesso!", "", "success");
        goToFeedPage(navigate);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado. Tente novamente mais tarde.",
          footer: `Código do erro ${err.response.status}`,
        });
      });
  };

  const navigate = useNavigate();

  const { form, onChange } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const onSubmitSignUp = (event) => {
    event.preventDefault();
    signUp(form, navigate);
  };

  return (
    <form onSubmit={onSubmitSignUp}>
      <Input
        name="username"
        value={form.username}
        onChange={onChange}
        type="text"
        placeholder="Nome de usuário"
        required
      />
      <Input
        name="email"
        value={form.email}
        onChange={onChange}
        type="email"
        placeholder="E-mail"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        title="exemplo@exemplo.com"
        required
      />
      <Input
        name="password"
        value={form.password}
        onChange={onChange}
        type="password"
        placeholder="Senha"
        required
      />
      <TextContainer>
        <BlackText>
          Ao continuar, você concorda com o nosso{" "}
          <BlueText>Contrato de usuário</BlueText> e nossa{" "}
          <BlueText>Política de Privacidade</BlueText>
        </BlackText>
        <div>
          <input type="checkbox" name="Teste" />
          <Label>
            {" "}
            Eu concordo em receber e-mails sobre coisas legais no Labeddit
          </Label>
        </div>
      </TextContainer>

      <GradientButton>Cadastrar</GradientButton>
    </form>
  );
};

export default SignUpForm;
