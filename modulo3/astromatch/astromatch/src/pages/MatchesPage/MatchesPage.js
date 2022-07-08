import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../constants/urls";
import { MatchesContainer, Match, Photo } from "./styled";

function MatchesPage(props) {
  const [matches, setMatches] = useState(undefined);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    const url = `${BASE_URL}/${headers}/matches`;

    axios
      .get(url)
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const allMatches =
    matches &&
    matches.map((match) => {
      return (
        <div key={match.id}>
          <Match>
            <Photo photo={match.photo} name={match.name} />

            <p>{match.name}</p>
          </Match>
          <hr />
        </div>
      );
    });

  return (
    <MatchesContainer>
      <ul> {allMatches}</ul>
    </MatchesContainer>
  );
}

export default MatchesPage;
