import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, DivButton } from "./Styled";
import load from "../../assets/img/loading.gif";
import { Loading } from "../AdminHomePage/styled";
import useRequest from "../../Hooks/UseRequest";
import { BASE_URL } from "../../Constants/urls";

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoading] = useRequest(`${BASE_URL}/trips`);

  const goToListTripsPage = () => {
    navigate("/trips/list");
  };

  const goToLoginPage = () => {
    navigate("/login");
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/login");
    } else {
      navigate("/admin/trips/list");
    }
  };
  return (
    <Container>
      <Title>LabeX</Title>
      {!isLoading && (
        <Loading>
          <img src={load} alt="Loading" />
        </Loading>
      )}
      {isLoading && (
        <DivButton>
          <button onClick={goToListTripsPage}>Viagens</button>
          <button onClick={goToLoginPage}>Admin</button>
        </DivButton>
      )}
    </Container>
  );
};

export default HomePage;
