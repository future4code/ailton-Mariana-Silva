import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    margin-top: 14%;
    width: 50%;
    height: 20px;
    background-color: transparent;
    border-width: 0px 0px 1px;
    border-color: #cecece;
    margin-bottom: 20px;
    color: white;
    ::placeholder {
      color: white;
      font-size: 15px;
    }
    @media (max-width: 480px) {
      padding: 10px;
      width: 80%;
    }
    }
  h2 {
    padding-top: 5rem;
    font-size: 3rem;
    color: white;
    @media (max-width: 480px) {
      margin-bottom: 40px;
      font-size: 20px;
    }
  }
  button {
    cursor: pointer;
    background-color: white;
    margin-bottom: 1rem;
    border: none;
    border-radius: 4px;
    padding: 1rem 2rem;
    color: black;
    width: 16%;    
    @media (max-width: 480px) {
      padding: 5px;
      width: 40%;
      height: 30px;
      font-size: 15px;
    }
  }
`