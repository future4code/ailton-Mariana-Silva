import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import { PokeCards } from "./components/PokeCard/styled";

const App = () => {
  const [pokeList, setPokelist] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const catchAllPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokelist(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    catchAllPokemons();
  }, [pokeName]);

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <PokeCards className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>

      {pokeName && <PokeCard pokemon={pokeName} />}
    </PokeCards>
  );
};

export default App;
