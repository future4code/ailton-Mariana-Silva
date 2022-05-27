// # Exercícios de interpretação de código

// 1. a) Vai ser impresso todos os itens, index e array

// 2. a) Vai ser impresso os 3 itens ou seja somente os nomes dentro do array. 

// 3. a) Vai ser impresso todos os itens, index e array exeto a linha que tenha o apelido "Chijo"

// --------------------------------------------

// # Exercícios de escrita de código

// 1. 
// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]
// // a) 
// const nomesDosDoguinhos = pets.map((pet) => {
//   return pet.nome
// })
// console.log(nomesDosDoguinhos)
// // b)
// const doguinhoSalsicha = pets.filter((pet) => {
//   return pet.raca === "Salsicha"
// })
// console.log(doguinhoSalsicha)
// // c)
// const cupomDeDesconto = pets.filter((cupom) => {
//   return cupom.raca === "Poodle"
// }).map ((cupom) => {
//   return `Você ganhou um cupom de desconto de 10% para tosar o ${cupom.nome}!`
// })
// console.log(cupomDeDesconto)
// --------------------------------------------

// 2. 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
  ]
  // a) 
  const nomeDosProdutos = produtos.map((produto) => {
    return produto.nome
  })
  console.log(nomeDosProdutos)
  // b)
  const cincoPorCento = produtos.map((desconto) => {
    return {nome: desconto.nome, preco: (desconto.preco *0.95)}
  })
  console.log(cincoPorCento)
  // c )
  const categoriaBebidas = produtos.filter((bebidas) => {
    return bebidas.categoria === "Bebidas"
  })
  console.log(categoriaBebidas)
  // d)
  const marcaYpe = produtos.filter((marca) => {
    return marca.nome.includes("Ypê")
  })
  console.log(marcaYpe)
  // e) 
  const descontoParaYpe = produtos.filter((marca) => {
    return marca.nome.includes("Ypê")
  }).map ((marca) => {
    return `Compre ${marca.nome} por ${marca.preco}`
  })
  console.log(descontoParaYpe)