import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;

	button {
		background-color: black;
		color: white;
		border-color: gray;
	}
	
`
const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
	background-color: black;
	color: white;
`
export class SecaoComentario extends Component {
	state = {
		comentario: ''
	}
	onChangeComentario = (event) => {
        this.setState({
            comentario: event.target.value
        })
        console.log(this.state.comentario)}
		render () {	
			return (
		<CommentContainer>
			<InputComentario
				placeholder={'Adicione um comentário...'}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}
}
