import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
	margin: 0px 5px 0px 0px;
	height: 20px;

	p{
		margin: 0px;
	}
	
`
const IconImage = styled.img`
	margin-right: 5px;
`

export function IconeComContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}
