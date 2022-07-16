import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/urls";
import useRequest from "../../Hooks/UseRequest";
import load from "../../assets/img/loading.gif";
import { Loading } from "../AdminHomePage/styled";
import { TbArrowBackUp } from "react-icons/tb";
import {
  Container,
  Header,
  Button,
  Title,
  BoxCards,
  Card,
  TitleCard,
} from "./Styled";

const ListTripsPage = () => {
  const [listTrips, setListTrips, isLoading] = useRequest(`${BASE_URL}/trips`);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goToApplicationFormPage = () => navigate("/trips/application");

  return (
    <Container>
      <Header>
        <Title>Lista De Viagens</Title>
        <Button onClick={goToApplicationFormPage}>Increva-se</Button>
        <TbArrowBackUp onClick={goBack} />
      </Header>
      {isLoading && (
        <Loading>
          <img src={load} alt="Loading" />
        </Loading>
      )}
      {!isLoading && (
        <BoxCards>
          {listTrips?.trips.map((trip) => {
            return (
              <Card key={trip.id}>
                <TitleCard> {trip.name}</TitleCard>
                <p>
                  <strong> Descrição: </strong> {trip.description}
                </p>
                <br />
                <p>
                  <strong> Planeta: </strong> {trip.planet}
                </p>
                <br />
                <p>
                  <strong> Data:</strong> {trip.date}
                </p>
                <br />
                <p>
                  <strong> Duração da Viagem:</strong> {trip.durationInDays}{" "}
                  dias
                </p>
              </Card>
            );
          })}
        </BoxCards>
      )}
    </Container>
  );
};

export default ListTripsPage;
