import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  .fire {
    cursor: pointer;
    font-size: 25px;
    color: #fe7e02;
    margin-right: 0;
  }
  .people {
    cursor: pointer;
    font-size: 25px;
    color: white;
  }
`;
export const AppName = styled.p`
  font-weight: bold;
  color: white;
  font-size: 30px;
  margin: 16px;

  span {
    color: #fe7e02;
  }
`;
