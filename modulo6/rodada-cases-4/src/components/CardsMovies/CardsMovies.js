import { CardMovie, CardSection, NotFound } from "./styled";
import { GlobalContext } from "../../Global/GlobalContext";
import { GetAllMovies } from "../../services/requests";
import { goToDetails } from "../../routes/coordinator";
import { BASE_IMG } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

export const CardsMovies = () => {
  const { states, setters } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    GetAllMovies(states.page, setters.setMovie);
  }, [setters.setSearchMovie, setters.setMovie, states.page, states.search]);

  const searchMovie = states.searchMovie || states.movie;

  const movies =
    Array.isArray(states.movie) &&
    searchMovie
      .filter((movie) => {
        if (states.genreId.length === 0) {
          return movie;
        } else {
          for (const gen of movie.genre_ids) {
            if (states?.genreId?.indexOf(gen) >= 0) {
              return movie;
            }
          }
        }
      })
      .map((movie) => {
        let date = movie.release_date;
        let newDate = date
          ?.split("-")
          ?.reverse()
          ?.join("-")
          ?.replaceAll("-", ".");

        return (
          <CardMovie
            key={movie.id}
            onClick={() => goToDetails(navigate, movie.id)}
          >
            <img
              src={`${BASE_IMG}/${movie.poster_path}`}
              title={`${movie.title}`}
              alt={`Poster ${movie.title}`}
            />
            <h1>{movie.title}</h1>
            <p>{`${newDate}`}</p>
          </CardMovie>
        );
      });

  return (
    <CardSection>
      {movies.length > 0 ? (
        movies
      ) : (
        <NotFound>
          Filme não encontrado, <br />
          Verifique em outras páginas!
        </NotFound>
      )}
    </CardSection>
  );
};
