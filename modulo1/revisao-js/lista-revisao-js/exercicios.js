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
    if(ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    }else if(ladoA === ladoB || ladoB === ladoC || ladoC === ladoA){
        return "Isósceles"
    }else{
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    return [array.sort((a, b) => a-b)[array.length - 2 ], array[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`  
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novaPessoa = {...pessoa,
        nome: "ANÔNIMO"
     }
         return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = []

    pessoas.filter((pessoa)=>{
    if(pessoa.idade > 14 && pessoa.altura > 1.5 && pessoa.idade < 60){
        pessoasAutorizadas.push(pessoa)
    }
})
return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = []

    pessoas.filter((pessoa1)=>{
 
        if(pessoa1.idade <= "14" || pessoa1.idade > 60 || pessoa1.altura < 1.5){
            pessoasNaoAutorizadas.push(pessoa1)
        }  
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let compras = contas.map((objCliente) => {
        for (let compra of objCliente.compras) {
            objCliente.saldoTotal -= compra;
        }
        return {... objCliente,
        saldoTotal: objCliente.saldoTotal,
    compras: []
}
    })
return compras
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}