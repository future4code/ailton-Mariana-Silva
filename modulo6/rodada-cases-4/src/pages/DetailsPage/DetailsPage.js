import { CastAndTrailers } from "../../components/CastAndTrailers/CastAndTrailers";
import { DetailsCard } from "../../components/DetailsCard/DetailsCard";
import { GlobalContext } from "../../Global/GlobalContext";
import { Container, Content, InfoFilm } from "./styled";
import { Header } from "../../components/Header/Header";
import { LoaderContainer } from "../HomePage/styled";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";

export const DetailsPage = () => {
  const { states } = useContext(GlobalContext);

  return (
    <Container>
      <Header />
      <Content>
        {states.isLoading && (
          <LoaderContainer>
            <CircularProgress style={{ color: "#ffffff" }} />
          </LoaderContainer>
        )}
        {!states.isLoading && (
          <InfoFilm>
            <DetailsCard />
          </InfoFilm>
        )}
      </Content>
      {!states.isLoading && <CastAndTrailers />}
    </Container>
  );
};
