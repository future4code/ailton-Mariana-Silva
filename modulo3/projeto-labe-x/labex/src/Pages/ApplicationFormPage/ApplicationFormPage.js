import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import { countries } from "../../Constants/Countries";
import useRequest from "../../Hooks/UseRequest";
import { BASE_URL } from "../../Constants/urls";
import load from "../../assets/img/loading.gif";
import { Loading } from "../AdminHomePage/styled";
import { TbArrowBackUp } from "react-icons/tb";
import Swal from "sweetalert2";
import {
  Container,
  Header,
  Title,
  Form,
  Input,
  Select,
  DivButton
} from "./Styled";

const ApplicationFormPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [listTrips, setListTrips, isLoading] = useRequest(`${BASE_URL}/trips`);
  const { form, onChange, cleanFields } = useForm({
    tripId: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const applyToTrip = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: Number(form.age),
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    axios
      .post(`${BASE_URL}/trips/${form.tripId}/apply`, body)
      .then((res) => {
        Swal.fire("", "Inscrição Enviada!", "success");
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
      <Header>
        <TbArrowBackUp onClick={goBack} />
        <Title>Inscreva-se para uma Viagem</Title>
      </Header>
      {isLoading && (
        <Loading>
          <img src={load} alt="Loading" />
        </Loading>
      )}
      {!isLoading && 
        <Form onSubmit={applyToTrip}>
          <Select
            value={form.tripId}
            required
            name={"tripId"}
            onChange={onChange}
          >
            <option value={""}>Selecione uma Viagem:</option>
            {listTrips?.trips.map((trip) => {
              return (
                <option value={trip.id} key={trip.id}>
                  {trip.name}
                </option>
              );
            })}
          </Select>
          <Input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder={"Nome"}
            required
            pattern={"^.{3,}"}
            title={"Seu nome deve ter no mínimo 3 caracteres"}
          />
          <Input
            name="age"
            value={form.age}
            onChange={onChange}
            placeholder={"Idade"}
            required
            type={"number"}
            min={18}
          />
          <Input
            name="applicationText"
            value={form.applicationText}
            onChange={onChange}
            placeholder={"Texto de Candidatura"}
            required
            pattern={"^.{30,}"}
            title={"Seu texto de candidatura deve ter no mínimo 30 caracteres"}
          />
          <Input
            name="profession"
            value={form.profession}
            onChange={onChange}
            placeholder={"Profissão"}
            required
            pattern={"^.{10,}"}
            title={"Sua profissão deve ter no mínimo 10 caracteres"}
          />
          <Select
            value={form.country}
            required
            name={"country"}
            onChange={onChange}
          >
            <option value={""}>País de Origem:</option>
            {countries.map((country) => {
              return (
                <option value={country} key={country}>
                  {country}
                </option>
              );
            })}
          </Select>
          <DivButton>
            <button> Enviar</button>
          </DivButton>
        </Form>
      }
    </Container>
  );
};

export default ApplicationFormPage;
