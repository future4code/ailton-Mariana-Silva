import styled from "styled-components"

export const Container = styled.div`
  background-color: #000000;
`
export const Logo = styled.div`
  cursor: pointer;
  color: white;
  display: inline;
  margin: 0px 0px 18px;
  padding: 0 40px;
  color: white;
  display: inline;
  font-size: 32px;
  h1{
  cursor: pointer;
    display: inline;
    color: white;
    font-size: 36px;
}
  @media (max-width: 480px) {
    display: none;
  }
`
export const FirstContainer = styled.div`
  cursor: pointer;
  margin: 30px 0;
  padding: 0 16px;
  color: white;
  font-size: 25px;
  @media (max-width: 480px) {
    width: 20%;
    padding: 0;
    margin-top: 0;
    font-size: 100px;
    display: none;
  }
`
export const FirstContainerItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  color: white;
  font-size: 25px;
  padding-left: 16px;
  margin: 5px;
  text-align: center;
  :hover {
    opacity: 1;
  }
  h4 {
    font-size: 16px;
    text-align: center;
    padding-left: 16px;
    margin: 5px;
    color: white;    
  }
  @media (max-width: 480px) {
      font-size:30px;
      padding-bottom: 10px;
  }
`
export const SecondContainer = styled.div`
  margin: 30px 0;
  padding: 0 16px;
  cursor: pointer;
  color: white;
  font-size: 25px;
  @media (max-width: 480px) {
    width: 20%;
    margin: 0;
    padding: 0;
    font-size: 100px;
    display: none;
  }
`
export const SecondContainerItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 25px;
    color: white;
    text-align: center;
    padding-left: 16px;
    margin: 5px;
    margin-top: 0;
    :hover {
    opacity: 1;
    }
    h4 {
    font-size: 16px;
    padding-left: 16px;
    color: white;
    margin: 0;
    }
`
export const ContainerItems = styled.div`
  position: fixed;
  width: 18%;
  margin: 20px auto;
  text-align: center; 
  h1 {
    margin: 5px;
    cursor: pointer;
  }
  hr {
    border-width: 0px 0px 1px;
    width: 90%;
    border-color: #282828;
  }
  p{
    cursor: pointer;
    color: white;
    text-align: center;
    margin-top: 90px;
    margin-bottom: 5px;
  }
  @media (max-width: 480px) {
    height: auto;
    width: 100%;
    hr {
      display: none;
    }
    h4 {
      display: none;
    } 
    p{
      display: none;
    }
  }
`
export const ImgCardSpotify = styled.img`
  cursor: pointer;
  width: 90%;

  @media (max-width: 480px) {
    display: none;
  }
`
export const MenuMobile = styled.div`
    position: fixed;
    color: white;
    font-size: 30px;
    bottom: 0;
    display: none;
    border-top: 1px dashed black;
    background-color: rgba(0,0,0, 0.3);
  @media (max-width: 480px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding-bottom: 10px;
    padding-top: 10px;
  }
`