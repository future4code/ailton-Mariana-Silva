const anagramas = (palavra: string) => {
  const tamanho: number = Number(palavra.length);
  const mudaTipoParametro = (tamanho: number): number => {
    if (tamanho < 0) return -1;
    else if (tamanho == 0) return 1;
    else {
      return tamanho * mudaTipoParametro(tamanho - 1);
    }
  };
  return mudaTipoParametro(tamanho)
};

console.log(anagramas("Maria"));
