import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import { planets } from "../../Constants/Planets";
import axios from "axios";
import useRequest from "../../Hooks/UseRequest";
import load from "../../assets/img/loading.gif";
import { Loading } from "../AdminHomePage/styled";
import { BASE_URL } from "../../Constants/urls";
import { TbArrowBackUp } from "react-icons/tb";
import Swal from "sweetalert2";
import {
  Container,
  Title,
  Form,
  Input,
  Select,
  DivButton,
} from "./Styled";

const CreatTripPage = () => {
  const navigate = useNavigate();
  const [isLoading] = useRequest(`${BASE_URL}/trips`);
  const goBack = () => navigate(-1);

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const creatTrip = (e) => {
    e.preventDefault();

    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    axios
      .post(`${BASE_URL}/trips`, body, headers)
      .then((res) => Swal.fire("", "Viagem criada com sucesso!", "success"))
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
        <TbArrowBackUp onClick={goBack} />
      </header>
      <Title> Criar Viagem</Title>
      
      <Form onSubmit={creatTrip}>
        <Input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder={"Nome"}
          required
        />
        <Select
          name="planet"
          value={form.planet}
          onChange={onChange}
          placeholder={"Escolha um Planeta"}
          required
        >
          <option value={""}>Escolha um Planeta</option>
          {planets.map((planets) => {
            return (
              <option value={planets} key={planets}>
                {planets}
              </option>
            );
          })}
        </Select>
        <Input
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder={"Descrição"}
          required
          pattern={"^.{10,}"}
          title={"Seu texto deve ter no mínimo 10 caracteres"}
        />
        <Input
          name="date"
          value={form.date}
          onChange={onChange}
          placeholder={"Data"}
          required
          type={"date"}
        />
        <Input
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          placeholder={"Duração em dias"}
          required
          type={"number"}
          min={1}
        />
        <DivButton>
          <button>Criar</button>
        </DivButton>
      </Form>
    </Container>
  );
};

export default CreatTripPage;
