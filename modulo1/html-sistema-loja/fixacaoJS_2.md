```
function calculaPrecoTotal(quantidade) {
  let precoDuzia = 1.00
  let precoUnitario = 1.30
  
  if(quantidade < 12){
    return precoUnitario * quantidade
  } else {
    return precoDuzia * quantidade
  }
}
```