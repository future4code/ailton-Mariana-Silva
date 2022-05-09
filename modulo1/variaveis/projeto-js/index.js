// Exercícios de escrita de código
/* 1. Construa um programa, seguindo os seguintes passos:
    a) Declare uma variável para armazenar um nome, sem atribuir um valor.*/
const nome = "Mariana"

//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
const idade = 28

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof
console.log (typeof nome, typeof idade)

/* d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
Resposta: Foi impresso String e number, pois foram essas as variaveis utilizadas */

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

const meuNome = prompt ("Qual é o seu nome?")
const minhaIdade = prompt ("Quantos anos você tem?")

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log (typeof meuNome, typeof minhaIdade)
// Retornou String e Sttring, pois um prompt sempre vai retornar string

// g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu.

console.log (meuNome, minhaIdade)
console.log ("Olá", meuNome, "você tem", minhaIdade, "anos")

/* 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: 
"Você está usando uma roupa azul hoje?". Depois, siga os passos:
a) Crie três novas variáveis, contendo as respostas */

let jogar = prompt ("Você gosta de jogar video game (s/n)?")
let jogoPreferido = prompt ("Seu jogo favorito é Uncharted (s/n)?")
let tipoDeJogo = prompt ("Uncharted é um jogo de terror (s/n)?")

// b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas.
console.log (jogar, jogoPreferido, tipoDeJogo)
console.log ("Você gosta de jogar video game (s/n)?", jogar, "Seu jogo favorito é Uncharted (s/n)", jogoPreferido, "Uncharted é um jogo de terror (s/n)?", tipoDeJogo)

// 3. Suponha que temos duas variáveis a e b, cada uma com um valor inicial

let a = 10
let b = 25

/* Agora, queremos trocar os valores delas, de forma que 'a' passe a ter o valor de 'b' e 'b' passe a ter o valor de 'a'. 
Aqui faremos uma lógica para trocar os valores 

Resposta:
a = 10
b = 25
c = b
b = a
a = b
*/

/* Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, 
independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que a = 25 e b = 10 
porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). */

a = 10
b = 25
c = 25
b = 10
a = 25

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
