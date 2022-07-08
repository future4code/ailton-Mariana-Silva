import { SiTinder } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { HeaderContainer, AppName } from "./headerStyled";

function Header(props) {
  return (
    <HeaderContainer>
      <AppName>
        astro<span>Match</span>
      </AppName>

      {props.page === "profiles-page" ? (
        <SiTinder className="fire" onClick={props.goToMatchesPage} />
      ) : (
        <FaUserFriends className="people" onClick={props.goToProfilesPage} />
      )}
    </HeaderContainer>
  );
}

export default Header;
