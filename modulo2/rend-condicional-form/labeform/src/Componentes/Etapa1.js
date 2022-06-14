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
function Etapa1() {
  return (
    <div>
      <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>
      <Perguntas>
        <p>1. Qual o seu Nome?</p>
        <input />
        <p>2. Qual sua Idade?</p>
        <input />
        <p>3. Qual seu E-mail?</p>
        <input />
        <p>4. Qual a sua Escolaridade?</p>
        <select>
        <option>Selecione</option>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior Incompleto</option>
          <option>Ensino Superior Completo</option>
        </select>
      </Perguntas>
    </div>
  )
}
export default Etapa1;