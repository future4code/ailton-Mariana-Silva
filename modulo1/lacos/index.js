// # Exercícios de escrita de código

// 1.
bichinhosDoUsuario = +prompt("Quantos bichinhos de estimação você tem?")
bichinhos = []
// a)
if (bichinhosDoUsuario === 0) {
  console.log("Que pena! Você pode adotar um pet!")
// b)
}else {
  for (let i = 0; i < bichinhosDoUsuario; i++) {
    bichinhos.push(prompt("Qual o nome do seu pet?"))
  }
// c)
  console.log(bichinhos)
}

// -------------------------

// 2. 
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// a)
const imprimeValores = (array) => {
  for(let valor of arrayOriginal){
    console.log(valor)
  }
}
console.log(arrayOriginal)
// b)
for (let valor of arrayOriginal) {
  console.log(valor / 10)
}
// c)
const numerosPares = () => {
  let par = []

  for (i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] % 2 === 0){
      par.push(arrayOriginal[i])
    }
  } return par
}
console.log(numerosPares())
// d)
const novoArray = () => {
  for (i= 0; i < arrayOriginal.length; i++) {
    arrayOriginal[i] = `O elemento do index ${i} é: ${arrayOriginal[i]}`
  } return arrayOriginal
}
console.log(novoArray())
// e) 
arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const maiorEMenor = () => {

  let valorMaximo = 0
  let valorMinimo = Math.min(...arrayOriginal)
  
  for (i = 0; i < arrayOriginal.length; i++) {
    const elemento = arrayOriginal[i]
    
    if (elemento > valorMaximo) {
      valorMaximo = elemento
    }
    const elemento2 = arrayOriginal[i]

    if (elemento2 < valorMinimo) {
      valorMinimo = elemento2
    }
  }
  return `O maior número é ${valorMaximo} e o menor é o ${valorMinimo}`
}
console.log(maiorEMenor())


console.log