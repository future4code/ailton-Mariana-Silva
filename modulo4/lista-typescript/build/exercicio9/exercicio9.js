const anagramas = (palavra) => {
    const tamanho = Number(palavra.length);
    const mudaTipoParametro = (tamanho) => {
        if (tamanho < 0)
            return -1;
        else if (tamanho == 0)
            return 1;
        else {
            return tamanho * mudaTipoParametro(tamanho - 1);
        }
    };
    return mudaTipoParametro(tamanho);
};
console.log(anagramas("Maria"));
//# sourceMappingURL=exercicio9.js.map