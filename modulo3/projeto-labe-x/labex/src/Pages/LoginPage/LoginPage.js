import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import axios from "axios";
import { BASE_URL } from "../../Constants/urls";
import useRequest from "../../Hooks/UseRequest";
import load from "../../assets/img/loading.gif";
import { Loading } from "../AdminHomePage/styled";
import { TbArrowBackUp } from "react-icons/tb"
import Swal from "sweetalert2";
import { Container, Title, Form, Input, DivButton } from "./styled";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLoading] = useRequest(`${BASE_URL}/trips`);

  const goToHomePage = () => navigate("/");

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const login = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado. Verifique o preenchimento de todos os campos",
          footer: `Código do erro ${err.response.status}`,
        });
      });
    cleanFields();
  };

  return (
    <Container>
      <header>
        <TbArrowBackUp onClick={goToHomePage} />
      </header>
      <Title>Login</Title>
      {!isLoading && (
        <Loading>
          <img src={load} alt="Loading" />
        </Loading>
      )}
      {isLoading &&
      <Form onSubmit={login}>
        <Input
          name={"email"}
          placeholder={"E-mail"}
          value={form.email}
          onChange={onChange}
          required
        />
        <Input
          type={"password"}
          name={"password"}
          placeholder={"Senha"}
          value={form.password}
          onChange={onChange}
          pattern={"^.{6,}"}
          title={"Sua senha deve ter no mínimo 6 caracteres"}
          required
        />
        <br />
        <br />
        <DivButton>
          <button onClick={login}>Login</button>
        </DivButton>
      </Form>
}
    </Container>
  );
}
