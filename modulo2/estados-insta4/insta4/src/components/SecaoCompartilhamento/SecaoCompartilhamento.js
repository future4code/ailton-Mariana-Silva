import React from 'react'
import styled from 'styled-components'

const ConteinerDeCompartilhamento = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

export function ConteinerDeCompartilhamento(props) {
	return (
		<ConteinerDeCompartilhamento>
			<button onClick={props.aoCompartilhar}>Enviar</button>
		</ConteinerDeCompartilhamento>
	)
}