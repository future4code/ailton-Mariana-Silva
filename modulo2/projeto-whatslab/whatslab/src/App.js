import { useState } from 'react';
import styled from 'styled-components'
import Mensagem from './Components/Mensagem/Mensagem'
import MensagemUsuario from './Components/MensagemUsuario/MensagemUsuario';
import Fundo from './img/fundo.jpeg'
import Logo from './img/logo.png'
import Enviar from './img/enviar.png'

// Tela Principal
const Tela = styled.div `
  display: flex;
  justify-content: center;
  background-color: #171717;
`
// Header
const Header = styled.header`
position: fixed;
display: flex;
align-items: center;
justify-content: center;
border-bottom: 1px solid white;
background-color: #070707;
color: white;
width: 598px;
height: 50px;
`
const LogoWhatsLab = styled.p`
font-size: 25px;
margin: 0;
font-weight: 600;
margin-left: 5px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
top: 0;
`
const LogoImg = styled.img`
width: 40px;
height: 40px;
margin-left: 3px;
`
// Box
const Box = styled.div`
  display: flex;
  align-items: center;
`
// Tela de Mensagens
const TelaMensagens = styled.div`
  /* background-image: url(${Fundo}); */
  background-color: black;
  width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
`
const AreaTexto = styled.div`
  background-color: #a5d8dc;
  padding: 5px;
  border: 1px solid #f0c0bf;
  border-radius: 20px;
  margin: 20px 8px;
  flex-grow: 4;
  width: max-content;
`
const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`
const Input = styled.input`
  padding: 5px;
  border: none;
  flex-grow: 1;
  width: 100px;
  border-right: 1px solid gray;
  background-color: #a5d8dc;
  &:focus {
    outline: none;
  }
`
const InputMsg = styled.input`
  height: 20px;
  flex-grow: 2;
  padding: 5px;
  border: none;
  background-color: #a5d8dc;
  &:focus {
    outline: none;
  }
`
const Botao = styled.button`
  background: none;
  border: none;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #a5d8dc;
  margin-right: 11px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  img {
    width: 38px;
  }
`

function App() {
  const [valueInputUsuario, setInputUsuario] = useState('');
  const [valueInputMsg, setInputMsg] = useState('');
  const [msg, setMsg] = useState([])
  const onChangeInputMsg = (evento) => {
    setInputMsg(evento.target.value)
  }
  const onChangeInputUsuario = (evento) => {
    setInputUsuario(evento.target.value)
  }
  const envia = (evento) => {
    evento.preventDefault()
    setMsg([...msg, {Usuario: valueInputUsuario, msg: valueInputMsg}])
    setInputMsg('')
  }
  const showMsg = msg.map((dado, index) => {
     if(dado.Usuario !== '') /*(dado.Usuario !== 'eu')*/ {
      return <Mensagem tipoMsg={'UsuarioMsg'} Usuario={dado.Usuario} msg={dado.msg} key={index}></Mensagem>
    }else {
      return <MensagemUsuario Usuario={dado.Usuario} msg={dado.msg} key={index}></MensagemUsuario>
    }
  })

  return (
    <Tela>
      <Header>
      <LogoWhatsLab>WhatsLab</LogoWhatsLab>
          <LogoImg src={Logo} alt="Logo" />
        </Header>
      <TelaMensagens>
        {showMsg}
        <Box>
          <Form>
            <AreaTexto>
            <Input placeholder='Usuário' value={valueInputUsuario} onChange={onChangeInputUsuario}></Input>
            <InputMsg placeholder='Mensagem' value={valueInputMsg} onChange={onChangeInputMsg}></InputMsg>
            </AreaTexto>
            <Botao onClick={envia}><img src= {Enviar} /></Botao>
          </Form>
        </Box>
      </TelaMensagens>
    </Tela>
  );
}
export default App;