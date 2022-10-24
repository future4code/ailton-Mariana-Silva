import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  max-width: 100%;
  min-height: 56px;
  background-color: #5c16c5;
  justify-content: space-between;
  img {
    width: 184px;
    height: 24px;
    margin-left: 80px;
  }
  .back {
    margin-right: 80px;
    color: white;
    text-align: right;
    font-size: 30px;
    width: 184px;
  }
  @media screen and (max-width: 850px) {
    justify-content: center;
    flex-direction: column;
    img {
      margin: 30px 0;
    }
    .back {
      margin: -10px 0 20px;
    }
  }
  @media screen and (max-width: 480px) {
    justify-content: center;
    flex-direction: column;
    img {
      margin: 30px 0;
    }
  }
`;
export const InputSearch = styled.div`
  width: 34.375rem;
  margin: 0 50px;
  svg {
    color: white;
  }
  .textfield {
    color: white;
    border-bottom: 1px solid white !important;
  }
  @media screen and (max-width: 850px) {
    margin: 0 auto;
    .textfield {
      justify-content: center;
      align-items: center;
    }
  }
  @media screen and (max-width: 680px) {
    width: 90%;
  }
`;