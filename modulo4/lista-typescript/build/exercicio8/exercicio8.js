const formataData = (data) => {
    const dataCompleta = data.split("/");
    const ano = dataCompleta[2];
    return Number(ano);
};
const checaRenovacaoCNH = (anoAtual, anoNascimento, anoEmissao) => {
    const anoAtualFormatado = formataData(anoAtual);
    const anoNascFormatado = formataData(anoNascimento);
    const anoEmissaoFormatado = formataData(anoEmissao);
    let idade = anoAtualFormatado - anoNascFormatado;
    let tempoCarteira = anoAtualFormatado - anoEmissaoFormatado;
    if (idade <= 20) {
        return tempoCarteira >= 5 ? true : false;
    }
    else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? true : false;
    }
    else if (idade > 50) {
        return tempoCarteira >= 15 ? true : false;
    }
    else {
        return false;
    }
};
console.log(checaRenovacaoCNH("12/08/2022", "11/11/1993", "25/11/2012"));
//# sourceMappingURL=exercicio8.js.map