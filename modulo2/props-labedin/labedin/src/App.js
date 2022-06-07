import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import perfil from './components/imagens/perfil.jpeg';
import email from './components/imagens/email.png';
import endereco from './components/imagens/endereco.png';
import setinha from './components/imagens/setinha.png';
import pc from './components/imagens/pc.png';
import landingpage from './components/imagens/landingpage.png';
import blackjack from './components/imagens/blackjack.png';
import instagram from './components/imagens/instagram.png';
import github from './components/imagens/github.png';

import styled from 'styled-components';

 const Estilizacao = styled.div `

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;

.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  color: white;
}

.page-section-container {
  width: 40vw;
  margin: 10px 0;
  color: white;
}

.page-section-container > h3 {
  text-align: center;
  margin-bottom: 20px;
  color: white;
}

h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  color: white;
}
  `

function App() {
  return (
    <Estilizacao>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={perfil} 
          nome="Mariana Andrade" 
          descricao="Sou Mariana, tenho 28 anos e moro na grande São Paulo. Sou muito comunicativa, aprendo rápido e tenho ótima desenvoltura para trabalhos em equipe."
        />
        
        <ImagemButton 
          imagem={setinha} 
          texto="Ver mais"
        />
        <CardPequeno
          imagem={email}
          email="Email:" 
          descricao= "mariandrade8115@gmail.com@gmail.com"
        />
          <CardPequeno
          imagem={endereco}
          endereco="Endereço:"
          text= "Rua: Candeia, 98 - Carapicuíba-SP"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={pc} 
          nome="Labenu" 
          descricao="Atualmente em processo de transição de carreira e estudante de Web FullStack (Frontend

            HTML
            
            CSS
            
            JavaScript
            
            React
            
            Jest
            Backend
            
            Node
            
            Typescript
            
            MySQL
            
            AWS
            
            FireBase) na Labenu, onde tenho me dedicado nos conteúdos propostos para o aprendizado e o enriquecimento do currículo." 
        />
        
        <CardGrande 
          imagem={pc}
          nome="Web Full Stack" 
          descricao="No curso de web full stack, você aprende a construir uma aplicação web do zero, partindo somente de uma ideia e transformando-a em um site 100% funcional. Tecnologias: 

          Você vai saber programar tanto a parte que o usuário interage, o Frontend, quanto a lógica que acontece por trás, o Backend. E tudo isso sem a necessidade de experiência prévia com programação." 
        />
        <div className="page-section-container">
        <h2>Projetos</h2>
        <CardGrande 
          imagem={blackjack} 
          nome="BlackJack-21 JS" 
          descricao="O objetivo do jogo é ganhar do computador, superando em valor de pontos sem ultrapassar 21. Quem passar de 21 perde." 
        />

        <CardGrande 
          imagem={landingpage} 
          nome="Landing Page-4Cars HTML e CSS" 
          descricao="A 4Cars é uma empresa que tem surfado na onda dos apps de motoristas. Sua proposta é oferecer carros para serem alugados por motoristas a um custo razoável, aumentando a oportunidade para quem não pode comprar um carro." 
          
        />
        </div>
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={instagram}
          texto="Instagram" 
        />        

        <ImagemButton 
          imagem={github} 
          texto="GitHub" 
        />        
      </div>
    </Estilizacao>
  );
}

export default App;
