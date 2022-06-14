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
  select {
    width: 308px;
    height: 22px;
  }
`
function Etapa3() {
  return (
    <div>
      <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>
      <Perguntas>
        <p>7. Por que você não terminou um Curso de Graduação?</p>
        <input />
        <p>8. Você fez algum Curso Complementar?</p>
        <select>
        <option>Selecione</option>
          <option>Nenhum</option>
          <option>Curso Técnico</option>
          <option>Curso de Inglês</option>
          <option>Não fiz Curso Complementar</option>
        </select>
      </Perguntas>
    </div>
  )
}
export default Etapa3;