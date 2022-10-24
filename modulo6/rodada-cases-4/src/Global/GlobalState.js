import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const [page, setPage] = useState(1);
  const [cast, setCast] = useState([]);
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [search, setSearch] = useState("");
  const [trailer, setTrailer] = useState([]);
  const [genreId, setGenreId] = useState([]);
  const [ageGroup, setAgeGroup] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchMovie, setSearchMovie] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const states = {
    page,
    cast,
    movie,
    genre,
    search,
    trailer,
    genreId,
    ageGroup,
    isLoading,
    searchMovie,
  };
  const setters = {
    setPage,
    setCast,
    setMovie,
    setGenre,
    setSearch,
    setTrailer,
    setGenreId,
    setAgeGroup,
    setIsLoading,
    setSearchMovie,
  };
  const Provider = GlobalContext.Provider;

  return <Provider value={{ states, setters }}>{props.children}</Provider>;
};
