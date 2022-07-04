// #Exercícios de interpretação de código

// 1. a) O resultado da variavel * 5 ou seja 5*2=10 e 5*10=50
//    b) Nada

//2. a) 
//   b) i. true
//      ii. true
//      iii. true

// #Exercicios de escrita de código

// 1. a)

function imprimirMensagemSobreMim(){
    console.log("Eu sou a Mari, tenho 28 anos, moro em São Paulo e sou estudante.")}

imprimirMensagemSobreMim()

// b)

const nome = "Mari"
const idade = 28
const cidade = "São Paulo"
const profissão = "Estudante"

function imprimirMensagem (){
    console.log (`Eu sou a ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissão}.`)}

imprimirMensagem()

// 2. 
// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
// faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function somaDeDoisNumeros (numero1, numero2){
const somaDeDoisNumeros = 50 + 20

console.log(somaDeDoisNumeros) }

somaDeDoisNumeros()

// b) Faça uma função que recebe 2 números e retorne um booleano 
// que informa se o primeiro número é maior ou igual ao segundo.

function numerosDiferentes (num1, num2){
const numerosDiferentes = 7 >= 5

console.log(numerosDiferentes)}

numerosDiferentes()

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function parOuImpar (numParOuImpar){
const parOuImpar = 5 % 2 === 0

console.log(parOuImpar)}

parOuImpar()

// d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o 
// tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function mensagem (tamanhoDaMensagem){
const mensagem = "Estou ficando doida"


return console.log(mensagem.toUpperCase(), mensagem.length)}

mensagem()

// 3. 

const numeroEscolhido = prompt ("Insira um numero:")
const segundoNumeroEscolido = prompt ("Insira outro numero:")

function somaNumeros (soma1, soma2) {
const somaNumeros = Number(numeroEscolhido) + Number(segundoNumeroEscolido)
console.log(somaNumeros)} 
somaNumeros()


function subtraiNumeros (sub1, sub2) {
const subtraiNumeros = Number(numeroEscolhido) - Number(segundoNumeroEscolido)
console.log(subtraiNumeros)} 
subtraiNumeros()

function multiplicaNumeros (mult, mult2) {
const multiplicaNumeros = Number(numeroEscolhido) * Number(segundoNumeroEscolido)
console.log(multiplicaNumeros)} 
multiplicaNumeros()


function divideNumeros (div1, div2) {
const divideNumeros = Number(numeroEscolhido) / Number(segundoNumeroEscolido)
console.log(divideNumeros)} 
divideNumeros()