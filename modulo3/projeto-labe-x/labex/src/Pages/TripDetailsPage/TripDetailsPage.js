import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/urls";
import { useState, useEffect } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import load from "../../assets/img/loading.gif";
import { Loading } from "../AdminHomePage/styled";
import Swal from "sweetalert2";
import {
  Container,
  Header,
  TitlePage,
  BoxCards,
  Card,
  TitleCard,
  Title,
  Button
} from "./Styled";

const TripDetailsPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [tripDetail, setTripDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };
  const getTripDetail = () => {
    axios
      .get(`${BASE_URL}/trip/${params.tripId}`, headers)
      .then((response) => {
        setIsLoading(false);
        setTripDetail(response.data.trip);
      })
      .catch((err) => {
        setIsLoading(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo deu errado, verifique o preenchimento de todos os campos",
            footer: `Código do erro ${err.response.status}`,
          });
        });
  };
  useEffect(() => {
    setIsLoading(true);
    getTripDetail();
  }, []);

  const aproveCandidate = (candidate, choice) => {
    const body = {
      approve: choice,
    };
    axios
      .put(
        `${BASE_URL}/trips/${params.tripId}/candidates/${candidate.id}/decide`,
        body,
        headers
      )
      .then((res) => {
        if (choice === true) {
          Swal.fire(
            "",
            `Você aprovou o candidato ${candidate.name}!`,
            "success"
          );
          getTripDetail();
        } else {
          Swal.fire(
            "",
            `Você reprovou o candidato ${candidate.name}!`,
            "error"
          );
          getTripDetail();
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado. Tente novamente mais tarde",
          footer: `Código do erro ${err.response.status}`,
        });
      });
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Header>
        <TitlePage>Detalhes da Viagem</TitlePage>
        <TbArrowBackUp onClick={goBack} />
      </Header>
      {isLoading && (
        <Loading>
          <img src={load} alt="Loading" />
        </Loading>
      )}
      {!isLoading && (
        <BoxCards>
          <Card>
            <TitleCard>{tripDetail.name}</TitleCard>
            <Title>
              <strong>Planeta:</strong> {tripDetail.planet}
            </Title>
            <p>
              <strong>Descrição:</strong> {tripDetail.description}
            </p>
            <p>
              <strong>Duração:</strong> {tripDetail.durationInDays} dias
            </p>
            <p>
              <strong>Data de partida:</strong> {tripDetail.date}
            </p>
            <hr />
            <Title>Candidatos Pendentes</Title>
            {tripDetail.candidates?.map((candidate) => {
              return (
                <div key={candidate.id}>
                  <p>
                    <strong>Candidato:</strong> {candidate.name}
                  </p>
                  <p>
                    <strong>Idade:</strong> {candidate.age} anos
                  </p>
                  <p>
                    <strong>País de origem:</strong> {candidate.country}
                  </p>
                  <p>
                    <strong>Profissão:</strong> {candidate.profession}
                  </p>
                  <p>
                    <strong>Motivação:</strong> {candidate.applicationText}
                  </p>
                  <Button onClick={() => aproveCandidate(candidate, true)}>
                    APROVAR
                  </Button>
                  <Button onClick={() => aproveCandidate(candidate, false)}>
                    REPROVAR
                  </Button>
                  <hr />
                </div>
              );
            })}

            {tripDetail.candidates?.length > 0 ? (
              aproveCandidate
            ) : (
              <p>Não há candidatos pendentes</p>
            )}

            <Title>Candidatos Aprovados</Title>
            <div>
              {tripDetail.approved?.map((candidate) => {
                return (
                  <div key={candidate.id}>
                    <p>
                      🠖 <strong>Name:</strong> {candidate.name},{" "}
                      <strong>Idade:</strong> {candidate.age} anos -
                      <strong> País de Origem:</strong> {candidate.country}
                    </p>
                  </div>
                );
              })}

              {tripDetail.approved?.length > 0 ? (
                aproveCandidate
              ) : (
                <p>Não há candidatos aprovados</p>
              )}
            </div>
          </Card>
        </BoxCards>
      )}
    </Container>
  );
};

export default TripDetailsPage;
