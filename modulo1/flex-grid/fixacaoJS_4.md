```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let num = 0
    for(let numero of arrayDeNumeros){
      if(numero === numeroEscolhido){
        num += 1
      
      }
    
    }
    if(num > 0){
        return `O número ${numeroEscolhido} aparece ${num}x`
    }else {
        return `Número não encontrado`
    }
}
```