const romano = (num) => {
    if (num === "") {
        return "Digite um número";
    }
    if (num === 0) {
        return "Não existe 0 em romanos";
    }
    if (num > 3000) {
        return "Não converte acima de 3000 em romanos";
    }
    let resultado = "";
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romano = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];
    for (let i = 0; i <= decimal.length; i++) {
        while (num % decimal[i] < num) {
            resultado += romano[i];
            num -= decimal[i];
        }
    }
    return resultado;
};
console.log(romano("1402"));
//# sourceMappingURL=exercicio11.js.map