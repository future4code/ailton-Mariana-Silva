import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .pagination {
    margin: 25px auto;
    .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root {
      color: #5c16c5;
      font-size: 20px;
      font-weight: 700;
      border: none;
    }
  }
`;
export const GoUpMobile = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    cursor: pointer;
    display: flex;
    height: 2rem;
    align-items: center;
    color: #5c16c5;
    font-weight: 900;
    margin: 0 auto 1rem;
    font-size: 1.2rem;
    svg {
      font-size: 1.4rem;
      margin-bottom: 0.3135rem;
    }
  }
`;
export const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  margin: 1.875rem 7rem;
  gap: 2rem;

  @media (max-width: 720px) {
    width: 100vw;
    justify-content: center;
    margin: 2rem 1rem;
    gap: 1rem;
  }
`;
