// # Exercícios de interpretação de código

   // 1. a) O codigo verifica se o numero é par ou impar 
   //    b) Para os numero pares 
   //    c) Para os numero impares

   // 2. a) Para verificar o preço das frutas citadas. 
   //    b) O preço da fruta  Maça  é  R$  2,25
   //    c) O preço da fruta  Pêra  é  R$  5

   // # Exercícios de interpretação de código
   // 1. a) 1. b) 1. c)
   
   const idadeDoUsuario = prompt(Number("Digite a sua idade?"))
   const numero = Number(idadeDoUsuario)
 
   const podeDirigir = (idadeDoUsuario) => {
     if (idadeDoUsuario >= 18){
       return "Você pode Dirigir"
     } else {
       return "Você não pode dirigir"
     }
   }
   console.log(podeDirigir(idadeDoUsuario))
 
  // -------------------------
 
  // 2.
    const turnoDeAula = prompt("Em qual turno você estuda? Digite M para matutino, digite V para vespertino ou digite N para noturno:")
 
    const horarioDeEstudo = (turnoDeAula) => {
        if(turnoDeAula === 'M') {
            return `Bom Dia!`
        } else if(turnoDeAula === 'V') {
            return `Boa Tarde!`
        } else {
          return `Boa Noite!`
    }
    }
    console.log(horarioDeEstudo(turnoDeAula))
 
  // -------------------------
 
  // 3.
   const turnodeAula2 = prompt("Em qual turno você estuda? Digite M para matutino, digite V para vespertino ou digite N para noturno:")
 
   const horarioDeEstudo2 = (turnoDeAula2) => {
     switch (turnoDeAula2) {
       case "M":
         return "Bom Dia!"
       case "V":
         return "Boa Tarde!"
       default:
         return "Boa Noite!"
   }
 }
 
 console.log(horarioDeEstudo2(turnodeAula2))
 
  // -------------------------
 
  // 4.
 
  let generoDoFilme = prompt("Qual genero de filme vamos assistir")
  let precoDoIngresso = prompt("Qual o valor do ingresso?")
 
 const filme = (generoDoFilme, precoDoIngresso) => {
   if ((generoDoFilme === "Fantasia") && (precoDoIngresso <= 15)) {
       return "Bom filme!"
    } else {
       return "Escolha outro filme!:(" 
  } 
 }
 
 console.log(filme(generoDoFilme, precoDoIngresso))
 
 // -------------------------