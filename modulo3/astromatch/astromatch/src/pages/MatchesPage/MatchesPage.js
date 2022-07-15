import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../constants/urls";
import { MatchesContainer, Match, Photo } from "./styled";
import { VscDebugStepBack } from "react-icons/vsc";
import swal from "sweetalert2";

function MatchesPage() {
  const [matches, setMatches] = useState();

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
        swal.fire(`${error.message}`, "Tente novamente mais tarde!", "error");
        console.log(error.message);
      });
  };

  const resetProfiles = () => {
    const url = `${BASE_URL}/${headers}/clear`;

    axios
      .put(url)
      .then(() => {
        swal.fire("", "Perfis resetados com sucesso!", "success");
        getMatches();
      })
      .catch((error) => {
        swal.fire(`${error.message}`, "Tente novamente mais tarde!", "error");
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
      <ul>{allMatches}</ul>
      <button className="reset" onClick={() => resetProfiles()}>
        Resetar Perfis <VscDebugStepBack />
      </button>
    </MatchesContainer>
  );
}

export default MatchesPage;
