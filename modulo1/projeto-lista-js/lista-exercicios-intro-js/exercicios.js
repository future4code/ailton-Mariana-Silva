// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
const altura = Number(prompt("Digite a altura do retângulo"))
const largura = Number(prompt("Digite a largura do retângulo"))

const contaBasica = altura*largura
console.log(contaBasica)
}

// // EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoDeNascimento = Number(prompt("Digite seu ano de nascimento"))
  const imprimeIdade = anoAtual - anoDeNascimento
  console.log (imprimeIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const calculaIMC = peso / (altura * altura)
  
  return calculaIMC  
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual é o seu nome?")
  const idade = prompt ("Quantos anos você tem?")
  const email = prompt ("Qual é o seu e-mail?")
 
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

 }

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Qual a sua cor favorita?")
  const cor2 = prompt ("Qual a sua segunda cor favorita?")
  const cor3 = prompt ("Qual a sua terceira cor favorita?")
  
    console.log([cor1, cor2, cor3])
  }

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  mensagem = string.toUpperCase()
    return mensagem
      
  }
  

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const calculo = custo / valorIngresso

    return calculo
  
  }

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  string1 = "ola".length
  string2 = "abc".length

  let comparacao = string1 === string2

  return comparacao
  
  }

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const listaDeCompras = ["arroz", "feijão", "carne", "batata"]
  const primeiroItem = listaDeCompras[0] 
     
    return primeiroItem
  }


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const listaDeCompras2 = ["arroz", "feijão", "carne", "batata"]
    const ultimoItem = listaDeCompras2[listaDeCompras2.length - 1]
     
    return ultimoItem
  }
  

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

  let primeiro = array [0]
  let ultimo = array[array.length -1]
  array [0] = ultimo

return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()

  let comparacao = string1 === string2

  return comparacao
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  

}