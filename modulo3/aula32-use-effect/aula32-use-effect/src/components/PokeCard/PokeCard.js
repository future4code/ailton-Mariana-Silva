import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./styled";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const pokemonParaRenderizar = pokemon;
  return (
    <Card>
      <p>{pokemonParaRenderizar.name}</p>
      <p>{pokemonParaRenderizar.weight} Kg</p>
      {pokemonParaRenderizar.types && (
        <p>{pokemonParaRenderizar.types[0].type.name}</p>
      )}
      {pokemonParaRenderizar.sprites && (
        <img
          src={pokemonParaRenderizar.sprites.front_default}
          alt={pokemonParaRenderizar.name}
        />
      )}
    </Card>
  );
};

export default PokeCard;
