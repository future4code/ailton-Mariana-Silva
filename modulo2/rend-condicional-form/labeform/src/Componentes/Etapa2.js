import React from "react"
import styled from "styled-components"

const Titulo = styled.h3`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`
const Perguntas = styled.p`
  text-align: center;
  input {
    width: 300px;
  }
`
function Etapa2() {
  return (
    <div>
      <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
      <Perguntas>
        <p>5. Qual Curso?</p>
        <input />
        <p>6. Qual Unidade de Ensino?</p>
        <input />
      </Perguntas>
    </div>
  )
}
export default Etapa2;