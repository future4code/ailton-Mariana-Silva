import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 96vw;
  max-width: 700px;
  margin: auto;
`;

export const Header = styled.header`
  text-align: right;
  color: white;
  font-size: 30px;
`;

export const Title = styled.h2`
  font-size: 42px;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 3px 3px 2px black, 4px 4px Blue;
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
  box-shadow: 0 0 0 1px white, 0 0 0 3px Blue;
  height: 32px;
  border-radius: 8px;
  font-size: 20px;
  width: 92%;
  padding: 10px;
`;
export const Select = styled.select`
  box-shadow: 0 0 0 1px white, 0 0 0 3px Blue;
  height: 32px;
  border-radius: 8px;
  font-size: 20px;
  width: 92%;
  margin: 0 auto;
  max-width: 680px;
  text-align: left;
  padding-left: 10px;
  cursor: pointer;
`;

export const DivButton = styled.div`
  padding: 8px;
  display: flex;

  button {
    font-size: 24px;
    font-weight: bold;
    width: 140px;
    text-shadow: 1px 1px Blue;
    box-shadow: 0px 0px 1px 1px white, 0 0 0 3px Blue;
    border-radius: 5px;
    cursor: pointer;
  }
`;
