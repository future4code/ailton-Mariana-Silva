/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    alert("♣️ ♥️ Boas vindas ao jogo de Blackjack! ♠️ ♦️")
    while(confirm('Quer iniciar uma Nova Rodada?')){
        
        let cartasDoJogador = []
        let cartasDoComputador = []
        let pontosDoJogador = 0
        let pontosDoComputador = 0
        let novaCompra = comprarCarta()
    
        for(let i =0; i < 2; i++){
          novaCompra = comprarCarta()
          cartasDoJogador.push(novaCompra.texto)
          pontosDoJogador += novaCompra.valor
        }
        for(let i =0; i < 2; i++){
          novaCompra = comprarCarta()
          cartasDoComputador.push(novaCompra.texto)
          pontosDoComputador += novaCompra.valor
        }  
     // Se as duas cartas iniciais do usuário ou do computador forem dois ases (A), as cartas devem ser sorteadas novamente.
       while(pontosDoJogador === 22 || pontosDoComputador === 22){ 
          confirm(`Suas cartas vieram iguais: ${cartasDoJogador}... Vamos sortear novamente?`)
     }
     // Após o sorteio das 2 cartas para cada jogador, as duas primeiras cartas do usuário continuam sendo reveladas. 
     // A primeira carta do computador é revelada, a segunda é oculta por enquanto. Você deve perguntar ao usuário se ele deseja comprar mais uma carta. 
       while(pontosDoJogador <= 19 && confirm(`Suas cartas são ${cartasDoJogador}. A carta revelada do computador é ${cartasDoComputador[0]}.\n`+
       `Deseja comprar mais uma carta?`)){
          novaCompra = comprarCarta()
          cartasDoJogador.push(novaCompra.texto)
          pontosDoJogador += novaCompra.valor
       }
       // A cada carta comprada pelo usuário, a pontuação dele será somada com o valor da nova carta. Ele poderá comprar cartas até atingir a pontuação de 21 pontos; 
       // ou até decidir parar de comprar. Assim que o usuário chegar no limite de pontuação, a mensagem de fim de jogo deve ser mostrada, indicando quem venceu. 
       if(pontosDoJogador > 21){
          alert(`Suas cartas são: ${cartasDoJogador} = ${pontosDoJogador} pontos.\n`+
                `As cartas do computador são ${cartasDoComputador} = ${pontosDoComputador} pontos.\n`+
                `O computador ganhou! :(`)
       }else{
          // Quando o jogador parar de comprar cartas (Ter clicado cancel ao receber a pergunta "Deseja comprar mais uma carta?") e tiver a pontuação menor ou igual a 21, 
          // inicia-se a rodada do computador. Ele deverá comprar cartas até que sua pontuação seja igual ou superior a do usuário.
       while(pontosDoComputador < pontosDoJogador){
          novaCompra = comprarCarta()
          cartasDoComputador.push(novaCompra.texto)
          pontosDoComputador += novaCompra.valor
       }
          // Se a pontuação do usuário for maior que 21, ele perde o jogo. Se a pontuação do computador for maior que 21 (e a do usuário não for), o usuário ganha o jogo.  
          // Se as pontuações do usuário e do computador forem iguais, o jogo termina em empate. 
       if(pontosDoComputador > 21 || pontosDoJogador > pontosDoComputador){
          alert(`Suas cartas são: ${cartasDoJogador} = ${pontosDoJogador} pontos.\n`+
                `As cartas do computador são: ${cartasDoComputador} = ${pontosDoComputador} pontos.\n`+ 
                `Uhuuuulll - Você ganhou! \o/`)
       }else if(pontosDoComputador > pontosDoJogador){
          alert(`Suas cartas são: ${cartasDoJogador} = ${pontosDoJogador}.\n`+
                `As cartas do computador são: ${cartasDoComputador} = ${pontosDoComputador} pontos.\n`+
                `O computador ganhou! :(`)
       }else{
          alert(`Suas cartas são ${cartasDoJogador} = ${pontosDoJogador}.\n`+
                `As cartas do computador são ${cartasDoComputador} = ${pontosDoComputador} pontos.\n`+
                `Empatou!`)
       }
      } 
    }    