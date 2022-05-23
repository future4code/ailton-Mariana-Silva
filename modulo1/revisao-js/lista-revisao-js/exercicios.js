// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b) => a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let par = []
     for (i = 0; i < array.length; i++) {
         if (array[i] % 2 === 0){
             par.push(array[i])
     }
  } 
  return par
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numeroElevadoADois = []
    let numeroPar = array.map((num) =>{
        if (num % 2 === 0){
            numeroElevadoADois.push(num*num)
        }
    })
       return numeroElevadoADois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for (i = 0; i < array.length; i++) {
      const numero = array[i]   
      if (numero > maior) {
        maior = numero
      }
      }
      return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    novoArray = [num1, num2]
    let maiorNumero = novoArray[0]
   
       for(let i = 0; i < novoArray.length; i++){
           if(novoArray[i] > maiorNumero){
               maiorNumero = novoArray[i]          
           }  
       }
       let diferencaEntreNumeros = () => {
           let resultado
           if(num1<num2){
                 resultado = num2-num1
           }else{
               resultado = num1-num2
           }
           return resultado
       }
       let divisivel = () => {
           if(num2 % num1 === 0){
              maiorDivisivelPorMenor = true
       }else{
            maiorDivisivelPorMenor = false
        }
        return maiorDivisivelPorMenor
       }
       novoObjeto = {
           maiorNumero: maiorNumero,
           maiorDivisivelPorMenor: divisivel(),
           diferenca: diferencaEntreNumeros()
       }
     return novoObjeto 
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}