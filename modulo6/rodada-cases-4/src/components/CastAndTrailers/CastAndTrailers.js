import { GetCast, GetTrailers } from "../../services/requests";
import { GlobalContext } from "../../Global/GlobalContext";
import { BASE_IMG, BASE_YTB } from "../../constants/urls";
import { MdImageNotSupported } from "react-icons/md";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TbMovieOff } from "react-icons/tb";
import {
  Cast,
  Trailer,
  CastCards,
  CastContainer,
  TrailerContainer,
} from "./styled";

export const CastAndTrailers = () => {
  const { states, setters } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    GetTrailers(setters.setTrailer, id);
    GetCast(setters.setCast, id);
  }, [id, setters.setCast, setters.setTrailer]);

  const originalCast = states?.cast?.map((actor) => {
    if (`${actor.profile_path}` === "null") {
      return <Cast key={actor.id}><h2><MdImageNotSupported/>Picture Not Found</h2>
      <div>
          <p>{`${actor.name}`}</p>
          <p>{`${actor.character}`}</p>
        </div></Cast>;
    }
    return (
      <Cast key={actor.id}>
        {states.cast.actor}
        <img src={`${BASE_IMG}/${actor.profile_path}`} alt={`${actor.name}`} />
        <div>
          <p>{`${actor.name}`}</p>
          <p>{`${actor.character}`}</p>
        </div>
      </Cast>
    );
  });
  const trailer = states?.trailer?.map((trailer) => {
    return (
      <Trailer key={trailer.id}>
        <iframe
          width="560"
          height="315"
          src={`${BASE_YTB}/${trailer.key}`}
          title={`${trailer.name}`}
        ></iframe>
      </Trailer>
    );
  });
  return (
    <CastContainer>
      <h1>Elenco original</h1>
      <CastCards>{originalCast}</CastCards>
      {trailer?.length > 0 ? (
        <TrailerContainer>
          <h1>Trailer</h1>
          {trailer}
        </TrailerContainer>
      ) : (
        <h1>
          <TbMovieOff />
          Trailer indisponivel
        </h1>
      )}
    </CastContainer>
  );
};
