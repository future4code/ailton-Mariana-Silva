import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'mariandr4de'}
          fotoUsuario={'https://i.picsum.photos/id/65/50/50.jpg?hmac=upbV4jtSuD8gvIFHdlND3NGiLkehNZKjlheFWdYFcRk'}
          fotoPost={'https://i.picsum.photos/id/724/200/150.jpg?hmac=eqjiSOQRohwdfbleGYz7LtZKsb4i0pGPVYbq6_uhlKY'}
        />
        <Post
          nomeUsuario={'maluzeras2'}
          fotoUsuario={'https://i.picsum.photos/id/832/50/50.jpg?hmac=ssV9lamuMshT3LJ4_bnKZbpqspsHZqvpOTtF25pllRQ'}
          fotoPost={'https://i.picsum.photos/id/741/200/150.jpg?hmac=BxMoqwjXaasfwRIZZYL6Nj5SNJKPNk5lGaNpF6Ap7LI'}
        />
        <Post
          nomeUsuario={'biasilvas2'}
          fotoUsuario={'https://i.picsum.photos/id/237/50/50.jpg?hmac=9cCVRLgc5HmY_XbEZ4SSgnaR5CqTMUtHPZ04MCvtH-k'}
          fotoPost={'https://i.picsum.photos/id/89/200/150.jpg?hmac=5dHGLOsLk-A49d5yfdoSbZUcP-dtNBjnzjIrIU227x8'}
        />
      </MainContainer>
    );
  }
}

export default App;
