//Um parente seu decidiu abrir um restaurante; e, recentemente, ele descobriu que você está fazendo um curso de programação. Além de pedir para você arrumar alguns computadores antigos dele, configurar a internet e outros pedidos clássicos, ele prometeu te pagar caso você implementasse um sistema para o restaurante. Os pratos deste restaurante possuem  um nome, um custo, um valor de venda, e um array de ingredientes. Cada uma das vendas deve conter o nome do prato e o nome do cliente que realizou a compra.

//a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.
type Prato = {
    nome: string;
    custo: number;
    preco: number;
    ingredientes: string[];
  };
  
  let cardapio: {}[] = [];
  let novoPratoEx: {} = {};
  
  /* function cadastraPrato(novoPrato:Prato): Prato[] {
      cardapio.push(novoPrato)
      return cardapio
  } */
  
  const marmitaSeg: Prato = {
    nome: "segunda",
    custo: 8,
    preco: 15,
    ingredientes: ["arroz", "feijao", "bife"],
  };
  
  const marmitaTeg: Prato = {
    nome: "terça",
    custo: 7,
    preco: 14,
    ingredientes: ["arroz", "feijao", "frango"],
  };
  
  const cadastrarPratos: any = (novoPrato: Prato) => {
    cardapio.push(novoPrato);
    return cardapio;
  };
  
  console.log(cadastrarPratos(marmitaSeg));
  console.log(cadastrarPratos(marmitaTeg));
  
  //b) Escreva uma função que recebe um nome e devolve o valor do produto com este nome.
  const buscaPratos: any = (nomeBuscado: string) => {
    return cardapio.filter((item: any) => {
      return item.nome === nomeBuscado;
    });
  };
  
  console.log(buscaPratos("terça"));
  
  //c) Escreva uma função para que ele venda um prato. Salve as vendas em um array no escopo global.
  let arrayVendas: {}[] = [];
  
  type TipoPedido = {
    pratoPedido: Prato;
    nomeCliente: string;
  };
  const pedido1: TipoPedido = {
    pratoPedido: marmitaSeg,
    nomeCliente: "Bruno",
  };
  
  const pedido2: TipoPedido = {
    pratoPedido: marmitaTeg,
    nomeCliente: "Mina",
  };
  
  const adicionaVenda: any = (pedidoParaAdicionar: TipoPedido) => {
    arrayVendas.push(pedidoParaAdicionar);
    return arrayVendas;
  };
  
  console.log(adicionaVenda(pedido1));
  console.log(adicionaVenda(pedido2));
  
  //d) Escreva uma função que determine o lucro do restaurante.
  let lucroTotal: number = 0;
  let lucroPrato: number = 0;
  
  const calculaLucro: any = (arrayVendas: TipoPedido[]) => {
    for (let item of arrayVendas) {
      lucroPrato = item.pratoPedido.preco - item.pratoPedido.custo;
      lucroTotal += lucroPrato;
    }
    return lucroTotal;
  };
  
  console.log(calculaLucro(arrayVendas));
  