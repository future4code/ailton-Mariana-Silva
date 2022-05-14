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
 
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu e-mail é ${email}.`)

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
  const mensagem = "Estou ficando doida"
    return console.log(mensagem.toUpperCase())
      
  }
  retornaStringEmMaiuscula()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const calculo = custo / valorIngresso

    return calculo
  
  }

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const s1 = "ola"
  const s2 = "abc"

    return s1 === s2
  
  }

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const listaDeCompras = ["arroz", "feijão", "carne", "batata"]
  const primeiroItem = listaDeCompras[0] 
     
    return primeiroItem
  }
  retornaPrimeiroElemento()



// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const listaDeCompras2 = ["arroz", "feijão", "carne", "batata"]
    const ultimoItem = listaDeCompras2[listaDeCompras2.length - 1]
     
    console.log(ultimoItem)
  }
  retornaUltimoElemento()

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const stringUm = "Mariana"
  const stringDois = "Mariana"

  return console.log(stringUm === stringDois)
}
checaIgualdadeDesconsiderandoCase()

// EXERCÍCIO 13
function checaRenovacaoRG() {
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  

}