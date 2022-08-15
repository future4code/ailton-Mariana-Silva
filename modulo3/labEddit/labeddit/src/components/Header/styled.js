import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #ededed;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  width: 40px;
`;
export const RightButton = styled.p`
  position: absolute;
  right: 30px;
  font-size: 18px;
  font-weight: 600;
  font-family: "Noto Sans";
  color: #4088cb;
  :hover {
    cursor: pointer;
  }
`;
export const LeftButton = styled.div`
  display: flex;
  position: absolute;
  left: 30px;
  font-size: 32px;
  color: #a3a3a3;
  :hover {
    cursor: pointer;
  }
`;
