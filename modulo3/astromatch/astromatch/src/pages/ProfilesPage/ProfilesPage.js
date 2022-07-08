import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../constants/urls";
import { BiHeartCircle } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { VscDebugStepBack } from "react-icons/vsc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Section, CardContainer, Buttons, Photo, Bio } from "./styled";

function ProfilesPage(props) {
  const [profile, setProfile] = useState();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    const url = `${BASE_URL}/${headers}/person`;

    axios
      .get(url)
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        alert("Tente novamente mais tarde");
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
          alert("It's a 🔥 Match!");
        }
        getProfile();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const resetProfiles = () => {
    const url = `${BASE_URL}/${headers}/clear`;

    axios
      .put(url)
      .then(() => {
        alert("Perfis resetados com sucesso!");
        getProfile();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const profileCard = profile ? (
    <Section>
      <Photo photo={profile.photo} name={profile.name}>
        <Bio>
          <h4>
            {profile.name}, {profile.age} <AiOutlineCheckCircle />{" "}
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
    </Section>
  ) : (
    <div>
      <h3>Seus Matches Acabaram! Clique em "Resetar Perfis" para reiniciar</h3>
    </div>
  );

  return (
    <CardContainer>
      {profileCard}
      <button className="reset" onClick={() => resetProfiles()}>
        Resetar Perfis <VscDebugStepBack />
      </button>
    </CardContainer>
  );
}
export default ProfilesPage;
