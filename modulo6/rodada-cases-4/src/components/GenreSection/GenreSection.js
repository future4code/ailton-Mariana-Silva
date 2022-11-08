import { GenreContainer, Description, Buttons } from "./styled";
import { GlobalContext } from "../../Global/GlobalContext";
import { GetMovieGenres } from "../../services/requests";
import React, { useContext, useEffect } from "react";

export const GenreSection = () => {
  const { states, setters } = useContext(GlobalContext);

  useEffect(() => {
    GetMovieGenres(setters.setGenre);
  }, [setters.setGenre]);

  const filterGenre = (id) => {
    if (states?.genre?.length === 0) {
      setters.setGenreId([...states.genreId, id]);
    } else if (states.genreId.indexOf(id) < 0) {
      setters.setGenreId([...states.genreId, id]);
    } else if (states.genreId.indexOf(id) >= 0) {
      setters.setGenreId(
        states.genreId.filter((gen) => {
          return gen !== id;
        })
      );
    }
  };
  const genreList = states?.genre?.map((genre) => {
    if (states?.genreId?.includes(genre.id)) {
      return (
        <button
          key={genre.id}
          className="add"
          onClick={() => filterGenre(genre.id)}
        >
          {genre.name}
        </button>
      );
    } else {
      return (
        <button
          key={genre.id}
          className="remove"
          onClick={() => filterGenre(genre.id)}
        >
          {genre.name}
        </button>
      );
    }
  });

  return (
    <GenreContainer>
      <Description>
        <h3>
          Bem-Vindo(a). <br />
          Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.
        </h3>
        <p>FILTRE POR:</p>
      </Description>
      <Buttons>{genreList}</Buttons>
    </GenreContainer>
  );
};
