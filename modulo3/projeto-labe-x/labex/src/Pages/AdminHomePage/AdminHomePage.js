import React from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../Hooks/UseRequest";
import axios from "axios";
import { BASE_URL } from "../../Constants/urls";
import load from "../../assets/img/loading.gif";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbArrowBackUp } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";
import { IoMdPlanet } from "react-icons/io";
import { IoIosCreate } from "react-icons/io";
import Swal from "sweetalert2";
import {
  Container,
  Header,
  TitlePage,
  Button,
  Loading,
  BoxCard,
  Card,
  Title,
  DeleteButton
} from "./styled";

export default function AdminHomePage() {
  const [listTrips, setListTrips, isLoading] = useRequest(`${BASE_URL}/trips`);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const goToHomePage = () => navigate("/");
  const createTrip = () => navigate("create");
  const goToTripDetails = (tripId) => {
    const tripIdentif = tripId;
    navigate(`/admin/trips/${tripIdentif}`);
  };

  const deleteTrip = (trip) => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    if (window.confirm("Deseja deletar a viagem?")) {
      axios
        .delete(`${BASE_URL}/trips/${trip.id}`, headers)
        .then((res) => {
          Swal.fire("", `Você deletou a viagem ${trip.name}!`, "success");
          window.location.reload();
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo deu errado. Tente novamente mais tarde",
            footer: `Código do erro ${err.response.status}`,
          });
        });
    }
  };

  return (
    <Container>
      <Header>
        <TitlePage>Área Admistrativa</TitlePage>
        <Button onClick={goToHomePage}>
          <TbArrowBackUp />
        </Button>
        <Button onClick={createTrip}>
          <IoMdPlanet />
          <IoIosCreate />
        </Button>
        <Button onClick={logout}>
          <HiOutlineLogout />
        </Button>
      </Header>
      {isLoading && (
        <Loading>
          <img src={load} alt="Loading" />
        </Loading>
      )}
      {!isLoading && (
        <BoxCard>
          {listTrips?.trips.map((trip) => {
            return (
              <Card onClick={() => goToTripDetails(trip.id)} key={trip.id}>
                <Title>{trip.name} </Title>
                <DeleteButton>
                  <RiDeleteBin6Line
                    onClick={(event) => {
                      deleteTrip(trip);
                      navigate("/admin/trips/list");
                      event.stopPropagation();
                    }}
                  />
                </DeleteButton>
              </Card>
            );
          })}
        </BoxCard>
      )}
    </Container>
  );
}