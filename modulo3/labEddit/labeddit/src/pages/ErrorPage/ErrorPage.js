import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { ErrorContainer } from "./styled";
import { Container, ContentContainer } from "../../constants/generalStyled";
import { GradientButton2 } from "../../constants/generalStyled";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <ContentContainer>
          <ErrorContainer>
            <h1>404</h1>
            <p>Page not found!</p>
            <GradientButton2 onClick={() => navigate(-1)}>
              Voltar
            </GradientButton2>
          </ErrorContainer>
        </ContentContainer>
      </Container>
    </>
  );
};

export default ErrorPage;
