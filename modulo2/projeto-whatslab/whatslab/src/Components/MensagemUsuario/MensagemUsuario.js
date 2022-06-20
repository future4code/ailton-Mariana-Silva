import styled from "styled-components";

const AreaMsg = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
const MsgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;
  margin-bottom: 5px;
  background-color: #a5d8dc;
  width: max-content;
  padding: 10px 10px;
  border-radius: 10px;
  max-width: 70%;
`
const Msg = styled.p`
  margin: 0 5px;
  word-wrap: break-word;
`
function MensagemEnviada(props) {
  return (
    <AreaMsg>
      <MsgDiv>
          <Msg>{props.msg}</Msg>
      </MsgDiv>
    </AreaMsg>
    
  );
}
export default MensagemEnviada;