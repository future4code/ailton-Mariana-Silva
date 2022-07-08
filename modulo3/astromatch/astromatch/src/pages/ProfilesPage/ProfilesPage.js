import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../constants/urls";
import { BiHeartCircle } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { VscDebugStepBack } from "react-icons/vsc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Section, CardContainer, Buttons, Photo, Bio } from "./styled";
import Loading from "../../components/Loading";
import swal from "sweetalert2";

function ProfilesPage() {
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    const url = `${BASE_URL}/${headers}/person`;
    setIsLoading(false);
    setProfile([]);

    axios
      .get(url)
      .then((response) => {
        setProfile(response.data.profile);
        setIsLoading(true);
      })
      .catch((error) => {
        swal.fire(`${error.message}`, "Tente novamente mais tarde!", "error");
        console.log(error.message);
      });
  };

  const chooseProfile = (profileId, choice) => {
    const url = `${BASE_URL}/${headers}/choose-person`;

    const body = {
      id: profileId,
      choice: true,
      isMatch: true,
    };

    axios
      .post(url, body)
      .then((response) => {
        if (choice && response.data.isMatch) {
          swal.fire("It's a🔥Match!", "", "success");
        }
        getProfile();
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
        getProfile();
      })
      .catch((error) => {
        swal.fire("", "Tente novamente mais tarde!", "error");
        console.log(error.message);
      });
  };

  const profileCard = profile ? (
    <Section>
      <Photo photo={profile.photo} name={profile.name}>
        <Bio>
          <h4>
            {profile.name}, {profile.age} <AiOutlineCheckCircle />
          </h4>
          <hr />
          <p>{profile.bio}</p>
        </Bio>
      </Photo>
      <Buttons>
        <AiOutlineCloseCircle
          className="dislike"
          onClick={() => chooseProfile(profile.id, false)}
        />
        <BiHeartCircle
          className="like"
          onClick={() => chooseProfile(profile.id, true)}
        />
      </Buttons>
      <button className="reset" onClick={() => resetProfiles()}>
        Resetar Perfis <VscDebugStepBack />
      </button>
    </Section>
  ) : (
    <div>
      <h3>Seus Matches Acabaram! Clique em "Resetar Perfis" para reiniciar</h3>
      <button className="reset" onClick={() => resetProfiles()}>
        Resetar Perfis <VscDebugStepBack />
      </button>
    </div>
  );

  return (
    <CardContainer>
      {!isLoading && <Loading />}
      {isLoading && profileCard}
    </CardContainer>
  );
}
export default ProfilesPage;
