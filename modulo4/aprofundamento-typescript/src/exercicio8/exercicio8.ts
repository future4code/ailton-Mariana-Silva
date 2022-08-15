type Produtos = {
  nome: string;
  preco: number;
  classificacao: string;
};

type Desconto = {
  desconto: number;
};

enum Descontinho {
  verao = 5,
  inverno = 10,
  banho = 4,
  intimas = 7,
}

function roupasBlackFriday(array: Produtos[]): Produtos[] & Desconto[] {
  const novoPreco = array.map((item) => {
    return {
      ...item,
      desconto: (item.preco * Descontinho.intimas) / 100,
    };
  });
  return novoPreco;
}

console.table(
  roupasBlackFriday([
    { nome: "biquini", preco: 50, classificacao: "verao" },
    { nome: "toca", preco: 100, classificacao: "verao" },
  ])
);
