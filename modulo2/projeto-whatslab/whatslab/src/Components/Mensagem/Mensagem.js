import styled from "styled-components";

const AreaMsg = styled.div`
  width: 100%;
  display: flex;
`
const MsgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 10px;
  margin-bottom: 5px;
  background-color: #f0c0bf;
  max-width: 70%;
  padding: 5px 15px;
  border-radius: 10px;
`
const Usuario = styled.p`
  font-weight: bold;
  margin: 0;
  color:  black;
  text-align: left;
`
const Msg = styled.p`
  margin: 0 5px;
  word-wrap: break-word;
`
function Mensagem(props) {
  return (
    <AreaMsg>
      <MsgDiv>
          <Usuario>{props.Usuario}</Usuario>
          <Msg>{props.msg}</Msg>
      </MsgDiv>
    </AreaMsg>
  );
}
export default Mensagem;