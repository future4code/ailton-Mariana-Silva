import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { GetDetails, GetAgeGroup } from "../../services/requests";
import { GlobalContext } from "../../Global/GlobalContext";
import { convertTime } from "../../constants/convertTime";
import { ProgressBar, MovieInfo } from "./styled";
import { BASE_IMG } from "../../constants/urls";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export const DetailsCard = () => {
  const { states, setters } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    GetDetails(setters.setMovie, id);
    GetAgeGroup(setters.setAgeGroup, id);
  }, [id, setters.setAgeGroup, setters.setMovie]);

  const genreList = states?.movie?.genres
    ?.map((genre, index) => {
      return genre.name;
    })
    .join(", ");

  let percentage = (states.movie.vote_average / 100) * 10;

  let date = states?.movie.release_date;
  let newDate = date?.split("-")?.reverse()?.join("-")?.replaceAll("-", "/");
  let year = date?.substring(0, 4);

  const ageGroup = states.ageGroup.iso_3166_1
    ? states?.ageGroup?.release_dates[0]?.certification + " anos"
    : "Indisponível";

  const NewAge = ageGroup === "L anos" ? "Livre" : ageGroup;

  return (
    <MovieInfo>
      <img
        src={`${BASE_IMG}/${states?.movie?.poster_path}`}
        title={`${states.movie.title}`}
        alt={`Poster ${states.movie.title}`}
      />
      <h1>
        {`${states.movie.title}`} ({`${year}`})
      </h1>
      <h2>
        {" "}
        <span>{NewAge}</span> • <span>{`${newDate}`} (BR)</span> •{" "}
        <span>{genreList}</span> •
        <span>{convertTime(`${states.movie.runtime}`)}</span>
      </h2>
      <ProgressBar>
        <div style={{ width: 65 }}>
          <CircularProgressbar
            value={percentage}
            maxValue={1}
            text={`${states?.movie?.vote_average?.toFixed(1) * 10}%`}
            styles={buildStyles({
              pathColor: "#14FF00",
              textColor: "#14FF00",
              trailColor: "#FFFFFF",
            })}
          />
        </div>
        <p>Avaliação dos usuários</p>
      </ProgressBar>
      <h3>Sinopse</h3>
      <p>{`${states.movie.overview}`}</p>
    </MovieInfo>
  );
};
