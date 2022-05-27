```
function calculaNota(ex, p1, p2) {
    let notaMedia = ((ex * 1) + (p1 * 2) + (p2 * 3)) / 6 
  if(notaMedia >= 9){
    return "A"
  }else if(notaMedia < 9 && notaMedia >= 7.5){
    return "B"
}else if(notaMedia < 7.5 && notaMedia >= 6){
    return "C"
}else {
    return "D"
}
}
```