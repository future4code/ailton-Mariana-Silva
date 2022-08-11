//O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
let minhaString: string = "Minha string";
/* minhaString = 0 */

console.log(minhaString);
//O arquivo acusa erro pois número não é string. E qd roda dá o erro: "Type 'number' is not assignable to type 'string'."

//b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
let meuNumero: number = 0;

//Com uma barrinha pipe ("ou")
let meuNumeroOuTexto: number | string = 0;
meuNumeroOuTexto = "Teste";

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

/* `nome`, que é uma string;
`idade`, que é um número;
`corFavorita`, que é uma string.*/

let object1:{} = {
    name:"Jil",
    age:20,
    cor:"laranja"
}

enum Cores {
  orange = "Orange",
  blue = "Blue",
  red = "Red",
  yellow = "Yellow",
  green = "Green",
  lilac = "Lilac",
  indigo = "Indigo",
}

type People = {
  name: string;
  age: number;
  favoriteColor: Cores;
};

let person1: People = {
  name: "Talita",
  age: 35,
  favoriteColor: Cores.orange,
};

let person2: People = {
  name: "Mari",
  age: 28,
  favoriteColor: Cores.indigo,
};

let person3: People = {
  name: "Jil",
  age: 36,
  favoriteColor: Cores.lilac,
};
//Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
console.table([person1, person2, person3]);

//d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.
//Criado enum na linha 27