import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 96vw;
  max-width: 700px;
  margin: auto;
  header {
    text-align: right;
    margin-right: 30px;
    color: white;
    font-size: 30px;
  }
`;
export const Title = styled.h2`
  font-size: 42px;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 3px 3px 2px black, 4px 4px blue;
  text-align: center;
  color: white;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
export const Input = styled.input`
  padding-left: 10px;
  box-shadow: 0 0 0 1px white, 0 0 0 3px blue;
  height: 32px;
  border-radius: 8px;
  font-size: 20px;
  width: 92%;
  padding: 10px;
`;
export const DivButton = styled.div`
  display: flex;
  button {
    font-size: 24px;
    font-weight: bold;
    width: 140px;
    text-shadow: 1px 1px blue;
    box-shadow: 0px 0px 1px 1px white, 0 0 0 3px blue;
    border-radius: 5px;
    cursor: pointer;
  }
`;