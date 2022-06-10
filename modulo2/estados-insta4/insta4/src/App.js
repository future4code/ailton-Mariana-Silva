import React, { useState } from 'react'
import styled from 'styled-components'
import Post from './components/Post/Post'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  padding-top: 20px;
`
const Formulario = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  padding-bottom: 20px;

  button {
    box-sizing: border-box;
    background-color: black;
    color: white;
    border-color: gray;
    padding: 3px;
}
`
const FormInput = styled.input`
  box-sizing: border-box;
  width: 300px;
  padding: 5px;
  margin-bottom: 10px;
  background-color: black;
  color: white;
`

function App() {
  
  const [inputUsuario, setInputUsuario] = useState('');
  const [inputFotoUsuario, setInputFotoUsuario] = useState('');
  const [inputFotoPost, setInputFotoPost] = useState('');
  const [posts, setPosts] = useState([
    {
        nomeUsuario:'mariandr4de',
          fotoUsuario:'https://i.picsum.photos/id/65/50/50.jpg?hmac=upbV4jtSuD8gvIFHdlND3NGiLkehNZKjlheFWdYFcRk',
          fotoPost:'https://i.picsum.photos/id/724/200/150.jpg?hmac=eqjiSOQRohwdfbleGYz7LtZKsb4i0pGPVYbq6_uhlKY'
      },
      {
        nomeUsuario:'maluzeras2',
          fotoUsuario:'https://i.picsum.photos/id/832/50/50.jpg?hmac=ssV9lamuMshT3LJ4_bnKZbpqspsHZqvpOTtF25pllRQ',
          fotoPost:'https://i.picsum.photos/id/741/200/150.jpg?hmac=BxMoqwjXaasfwRIZZYL6Nj5SNJKPNk5lGaNpF6Ap7LI'
      },
      {
        nomeUsuario: 'biasilvas2',
          fotoUsuario: 'https://i.picsum.photos/id/237/50/50.jpg?hmac=9cCVRLgc5HmY_XbEZ4SSgnaR5CqTMUtHPZ04MCvtH-k',
          fotoPost: 'https://i.picsum.photos/id/89/200/150.jpg?hmac=5dHGLOsLk-A49d5yfdoSbZUcP-dtNBjnzjIrIU227x8'
    }
])
  const adicionaPost = imput => {
      imput.preventDefault();
  const novoPost = {
      nomeUsuario: inputUsuario,
      fotoUsuario: inputFotoUsuario,
      fotoPost: inputFotoPost
  };
  const novosPosts = [...posts, novoPost];
      setPosts(novosPosts);
      setInputUsuario('');
      setInputFotoUsuario('');
      setInputFotoPost('');
  }

  const hinputUsuario = imput => {
      setInputUsuario(imput.target.value);
  }

  const hinputFotoUsuario = imput => {
      setInputFotoUsuario(imput.target.value);
  }

  const hinputFotoPost = imput => {
      setInputFotoPost(imput.target.value);
  }
  const listaDePosts = posts.map(post => {
    return (
        <div>
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
        </div>
    )
  })
  return (
      <div>
        <MainContainer>{listaDePosts}</MainContainer>
        <Formulario>
        <h3>Poste algo novo:</h3>
        <FormInput
          value={inputUsuario}
          onChange={hinputUsuario}
          placeholder="Nome do Usário"
        />
        <FormInput
          value={inputFotoUsuario}
          onChange={hinputFotoUsuario}
          placeholder="Foto do Usuário"
        />
        <FormInput
          value={inputFotoPost}
          onChange={hinputFotoPost}
          placeholder="Foto do Post"
        />
        <button onClick={adicionaPost}>Adicionar Post</button>
      </Formulario>
    </div>
  )  
}
export default App;
