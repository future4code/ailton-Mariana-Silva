function checafuncao(n1, n2) {
    let soma = n1 + n2;
    let sub = n1 - n2;
    let mult = n1 * n2;
    let maiorNumero;
    if (n1 > n2) {
        maiorNumero = n1;
    }
    else {
        maiorNumero = n2;
    }
    return [soma, sub, mult, maiorNumero];
}
console.log(checafuncao(6, 3));
//# sourceMappingURL=exercicio6.js.map