import React, { useState } from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import curtir from '../../img/curtir.png'
import curtido from '../../img/curtido.png'
import salvar from '../../img/salvar.png'
import salvo from '../../img/salvo.png'
import comentar from '../../img/comentar.png'
import compartilhar from '../../img/compartilhar.png'
import compartilhado from '../../img/compartilhado.png'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

function Post(props) {

  const [numeroDeCurtidas, setnumeroDeCurtidas] = useState(0)
  const [postCurtido, setCurtido] = useState(false)
  const [postSalvo, setpostSalvo] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroDeComentarios, setnumeroDeComentarios] = useState(0)
  const [inputDeComentario, setinputDeComentario] = useState('')

  const onclickSalvo = () => {
    setpostSalvo(!postSalvo)
  }

  const onClickCurtida = () => {
    if (!postCurtido) {
      setnumeroDeCurtidas(numeroDeCurtidas + 1)
    } else {
      setnumeroDeCurtidas(numeroDeCurtidas - 1)
    }
    setCurtido(!postCurtido)
  }

  const onClickComentario = () => {
    setComentando(!comentando)
    if (comentando) {
      componenteComentario = <SecaoComentario valueinputDeComentario={inputDeComentario} aoEnviar={aoEnviarComentario} onChange={imputandoComentarios} />
    }
    console.log(comentando)
  }

  const onClickCompatilha = () => {
    console.log("Post compartilhado");
  }

  const aoEnviarComentario = () => {
    setComentando(false)
    setnumeroDeComentarios(numeroDeComentarios + 1)
  }

  const imputandoComentarios = (event) => {
    setinputDeComentario(event.target.value)
  if (postSalvo) {
    iconepostSalvo = compartilhado
  } else {
    iconepostSalvo = compartilhar
  }

  }

  let iconepostSalvo

  if (postSalvo) {
    iconepostSalvo = salvo
  } else {
    iconepostSalvo = salvar
  }

  let iconeCurtida

  if (postCurtido) {
    iconeCurtida = curtido
  } else {
    iconeCurtida = curtir
  }

  let componenteComentario

  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} />
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>

        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroDeCurtidas}
        />

        <IconeComContador
          icone={comentar}
          onClickIcone={onClickComentario}
          valorContador={numeroDeComentarios}
        />

        <IconeComContador
          icone={compartilhar}
          onClickIcone={onClickCompatilha}
        />

        <IconeComContador
          icone={iconepostSalvo}
          onClickIcone={onclickSalvo}
        />

      </PostFooter>
      {componenteComentario}
    </PostContainer>
  )
}


export default Post