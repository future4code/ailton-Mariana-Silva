//a) Crie um arquivo chamado exercicio-4.ts , cole o código abaixo e use comentários para responder as questões.

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?
//Daria npm run ex4 no terminal após inserir "ex4": "tsc && node ./build/ex4.js" no script do ex4 (pq já configurei no config pra pegar na src),

//c) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.
//Temos que definir isso no arquivo tsconfig (root)

//d) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
//Criando um script no package.json "ex4D":"tsc && node ./build/arquivo1.ts arquivo2.ts arquivo3.ts