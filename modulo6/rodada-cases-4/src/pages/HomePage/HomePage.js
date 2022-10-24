import { GenreSection } from "../../components/GenreSection/GenreSection";
import { CardsMovies } from "../../components/CardsMovies/CardsMovies";
import { Container, GoUpMobile, LoaderContainer } from "./styled";
import { CircularProgress, Pagination } from "@mui/material";
import { GlobalContext } from "../../Global/GlobalContext";
import { Header } from "../../components/Header/Header";
import { ImArrowUp2 } from "react-icons/im";
import { useContext } from "react";

export const HomePage = () => {
  const { states, setters } = useContext(GlobalContext);

  const onChange = (event, value) => {
    setters.setPage(value);
  };

  return (
    <Container>
      <Header page={"home"} />
      {states.isLoading && (
        <LoaderContainer>
          <CircularProgress style={{ color: "#5C16C5" }} />
        </LoaderContainer>
      )}
      {!states.isLoading && (
        <>
          <GenreSection />
          <CardsMovies />
          <Pagination
            className="pagination"
            count={499}
            onChange={onChange}
            page={states.page}
            variant="outlined"
            shape="rounded"
          />
          <GoUpMobile onClick={() => window.scroll(0, 0)}>
            <ImArrowUp2 /> Voltar ao topo
          </GoUpMobile>
        </>
      )}
    </Container>
  );
};
