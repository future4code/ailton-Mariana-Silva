/* # Exercícios de interpretação de código

1. a) 
Matheus Nachtergaele
Virginia Cavendish
{canal: 'Globo', horario: '14h'}

-----------

2. a)

console.log(cachorro) -> nome: "Juca", idade: 3, raca: "SRD"

console.log(gato) -> A mesmas informações da const ccachorro, exceto o nome que vai ser "Juba" 

console.log(tartaruga) -> As mesmas informações da const gato, exceto o nome que vai ser Jubo, 
pois a letra "a" foi substituida por "o"

b) Espelha/copia o objeto.

-----------

3. a)
console.log(minhaFuncao(pessoa, "backender")) // false
console.log(minhaFuncao(pessoa, "altura")) // undefined

b) No console retornou undefined, pois não foi atribuido valor para "altura" */


// # Exercícios de escrita de código

// 1. a)

const pessoa = {
    nome: 'Mariana',
    apelidos: ["Mari", "Maria", "Ma"]
  }
  
  function frase (objs) {
  console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} 
  ou ${pessoa.apelidos[2]}`)
  }
  frase(pessoa)
  
  // b)
  
  const novaPessoa = {
    ...pessoa,
    apelidos: ['nega', 'amor', 'mala']
  }
  
  frase(novaPessoa)
  
  //-----------
  
  // 2. a)
  
  const pessoa1 = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Dev'
  
  }
  
  const pessoa2 = {
    nome: 'Malu',
    idade: 8,
    profissao: 'Estudante'
  
  }
  
  // b)
  
  function informacoes (pessoas) {
    const novasInformacoes = {
      ...pessoas
    }
    informacoes (pessoa1, pessoa2)
    }
  
    console.log ([pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length])
    console.log ([pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length])
  
  //-----------
  
  // 3. a) 
  
  const carrinho = []
  
  // b)
  
  const fruta1 = {
    nome: 'Manga',
    disponivel: true  
  }
  
  const fruta2 = {
    nome: 'Abacate',
    disponivel: true
  }
  
  const fruta3 = {
    nome: 'Goiaba',
    disponivel: false
  }
  
  // c)
  
  function addCarrinho (frutas) {
    carrinho.push(frutas)
  }
  
  addCarrinho(fruta1)
  addCarrinho(fruta2)
  addCarrinho(fruta3)
  
  // d)
  
  console.log(carrinho)