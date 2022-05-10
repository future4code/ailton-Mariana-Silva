/* # Exercícios de interpretação de código

1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

Resposta:
a- false
b- false
c- true
d- boolean

*/

/* 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

/* 3.Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso 
no console seja, de fato, a soma dos dois números. */

// Resposta: Conversão destring para numero
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number (primeiroNumero) + Number (segundoNumero)

console.log(soma)

// Exercícios de escrita de código

// 1. Faça um programa que:
// a) Pergunte a idade do usuário

const idadeDoUsuario = prompt("Qual é a sua idade?") 

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

const idadeDoMelhorAmigo = prompt("Qual é a idade do seu melhor amigo?")

// c) Imprima na console a seguinte mensagem: 
// "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)

const resultado = idadeDoUsuario >= idadeDoMelhorAmigo

console.log (resultado)

// d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)

const diferencaDeIdade = (idadeDoUsuario)-(idadeDoMelhorAmigo)

console.log (diferencaDeIdade)
console.log (typeof diferencaDeIdade)

// 2. Faça um programa que:
// a) Peça ao usuário que insira um número *par*

const numeroPar = prompt ("Insira um número  Par")

// b) Imprima na console *o resto da divisão* desse número por 2. 

const restoDaDivisao = numeroPar % 2
console.log (restoDaDivisao)

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Resposta: O resto da divisão sempre vai ser 0 quando o numero for *Par*

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// Resposta: O resto da divisão muda para 1

// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
   
const idadeUsuario = prompt ("Quantos anos você tem?") 
console.log (idadeUsuario)

// a) A idade do usuário em meses

const idadeEmMeses = (idadeUsuario) * 12
console.log (idadeEmMeses)
    
// b) A idade do usuário em dias

const idadeEmDias = (idadeUsuario) * 365
console.log (idadeEmDias)

// c) A idade do usuário em horas

const idadeEmHoras = (idadeUsuario) * (365 * 24)
console.log (idadeEmHoras)

// 4. Faça um programa que pergunte ao usuário dois números. Em seguida, 
// faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

const numero1 = prompt("Insira um numero")
const numero2 = prompt ("Insira outro numero")

let condicao = numero1 > numero2
let condicao2 = numero1 === numero2
let condicao3 = Number (numero1 % numero2) === 0
let condicao4 = Number (numero2 % numero1) === 0

console.log (condicao, condicao2, condicao3, condicao4)