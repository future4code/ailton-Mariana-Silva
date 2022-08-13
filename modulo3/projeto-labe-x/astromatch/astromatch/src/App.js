import React, { useState } from "react";
import Header from "./components/Header";
import ProfilesPage from "./pages/ProfilesPage/ProfilesPage";
import MatchesPage from "./pages/MatchesPage/MatchesPage";
import { AppContainer, MainContainer } from "./styled";

function App() {
  const [page, setPage] = useState("profiles-page");

  const renderCurrentPage = () => {
    switch (page) {
      case "profiles-page":
        return <ProfilesPage />;
      case "matches-page":
        return <MatchesPage />;
      default:
        return <ProfilesPage />;
    }
  };

  const goToProfilesPage = () => {
    setPage("profiles-page");
  };

  const goToMatchesPage = () => {
    setPage("matches-page");
  };

  return (
    <AppContainer>
      <MainContainer>
        <Header
          page={page}
          goToProfilesPage={goToProfilesPage}
          goToMatchesPage={goToMatchesPage}
        />
        <hr />
        {renderCurrentPage()}
      </MainContainer>
    </AppContainer>
  );
}

export default App;
