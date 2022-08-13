const isValidCPF = (cpf) => {
    if (typeof cpf !== "string")
        return false;
    cpf = cpf.replace(/[\s.-]*/gim, "");
    if (!cpf ||
        cpf.length != 11 ||
        cpf == "00000000000") {
        return false;
    }
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11)
        resto = 0;
    if (resto != parseInt(cpf.substring(9, 10)))
        return false;
    soma = 0;
    for (let i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11)
        resto = 0;
    if (resto != parseInt(cpf.substring(10, 11)))
        return false;
    return true;
};
console.log(isValidCPF("11111111111"));
//# sourceMappingURL=exercicio10.js.map