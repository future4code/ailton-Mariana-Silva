/* # Exercícios de interpretação de código

1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

a. undefined
b. null
c.11
d. 3
e. o numero 4 vira o numero 19
f. 9

*/

/* 2. Leia o código abaixo com atenção

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27 */

/* 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte 
mensagem: O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! */

// const nomeUsuario = prompt("Qual  é o seu nome")
// const emailUsuario = prompt("Qual é o seu e-mail")

// console.log(`O email ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeUsuario}!`)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
//Em seguida, siga os passos:

// const comidasPreferidas = ["sushi", "carne", "pizza", "hamburguer", "pastel"]

// //a) Imprima no console o array completo

// console.log(comidasPreferidas)    

// // b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: 
// // ", seguida por cada uma das comidas, **uma embaixo da outra**.

// console.log(`Essas são as minhas comidas preferidas:
// ${comidasPreferidas[0]}
// ${comidasPreferidas[1]}
// ${comidasPreferidas[2]}
// ${comidasPreferidas[3]}
// ${comidasPreferidas[4]}`)

// /* c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
// Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista */

// const comidafavoritaDoUsuario = prompt ("Qual é a sua comida favorita")

// let i = 0
// console.log(comidasPreferidas[i])

// comidasPreferidas [i+1] = comidafavoritaDoUsuario
// console.log(comidasPreferidas)

// 3. Faça um programa, seguindo os passos:
    
//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

// const listaDeTarefas = [""]
    
//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
// const primeiraTarefaDoDia = prompt ("Qual a sua primeira tarefa do dia?")
// const segundaTarefaDoDia = prompt ("Qual a sua segunda tarefa do dia?")
// const terceiraTarefaDoDia = prompt ("Qual a sua terceira tarefa do dia?")
// listaDeTarefas.push(primeiraTarefaDoDia)
// listaDeTarefas.push(segundaTarefaDoDia)
// listaDeTarefas.push(terceiraTarefaDoDia)

// //     c) Imprima o array no console

// console.log (listaDeTarefas)
    
// //     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

// const tarefaRealizada = prompt(`Qual tarefa do dia você já realizou?
// 1 = ${listaDeTarefas[1]}
// 2 = ${listaDeTarefas[2]}
// 3 = ${listaDeTarefas[3]}
// `)    
// console.log(tarefaRealizada)

// //     e) Remova da lista o item de índice que o usuário escolheu.

// console.log (listaDeTarefas.splice(0,tarefaRealizada))
    
// //     f) Imprima o array no console 

// console.log(listaDeTarefas)