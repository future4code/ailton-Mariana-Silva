import React from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../../routes/coordinator";
import { GradientButton, Input } from "../../constants/generalStyled";
import Swal from "sweetalert2";

const LoginForm = () => {
  const login = (body, navigate) => {
    axios
      .post(`${BASE_URL}/users/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToFeedPage(navigate);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Cadastro não encontrado. Tente novamente mais tarde.",
          footer: `Código do erro ${err.response.status}`,
        });
      });
  };

  const navigate = useNavigate()

  const { form, onChange } = useForm({ 
    email: "", 
    password: "" 
  })

  const onSubmitLogin = (event) => {
    event.preventDefault()

    login(form, navigate)
  }

  return (
    <form onSubmit={onSubmitLogin}>
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
      <GradientButton>Continuar</GradientButton>
    </form>
  )
}

export default LoginForm