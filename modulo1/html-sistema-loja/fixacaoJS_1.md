```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let salarioFixo = 2000
let comissao = (qtdeCarrosVendidos*100) + (valorTotalVendas*0.05)
let salarioMes = comissao + salarioFixo

return salarioMes
}
```