import React from "react"
import styled from "styled-components"

const Titulo = styled.h3`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`
const MsgFinal = styled.p`
  text-align: center;
`
function Final() {
  return (
    <div>
      <Titulo>O FORMULÁRIO ACABOU</Titulo>
      <MsgFinal>
        Muito Obrigada por Participar! Entraremos em Contato!
      </MsgFinal>
    </div>
  )
}
export default Final;