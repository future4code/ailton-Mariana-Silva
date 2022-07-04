import styled from "styled-components"

export const AddContainer = styled.div`
  width: 77.5%;
  height: 50vh;
  background: black;
  position: fixed;
  padding: 20px 40px;
  height: 100vh;
  @media (max-width: 480px) {
    width: 60%;
  }
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  margin-top: 100px;
  input {
    background-color: transparent;
    border-width: 0px 0px 1px;
    border-color: #cecece;
    padding: 1rem 0.5rem 0.2rem;
    margin-bottom: 10px;
    color: white;
    font-size: 25px;
    ::placeholder {
        color: white;
        font-size: 13px;
        opacity: 0.5;
    }
  }
  button {
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 1rem 2rem;
    margin: 0 auto;
    color: black;
    background-color: white;
    margin-bottom: 1rem;
  }
  @media (max-width: 480px) {
    width: 100%;
    button{
      height: 20px;
      padding-top:4px;
    }
    }
`