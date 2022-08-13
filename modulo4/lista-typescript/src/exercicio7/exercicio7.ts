type Product = {
  name: string;
  quantity: number;
  unitaryValue: number | string;
};

const listInventory = [
  { name: "MacMugffin", quantity: 37, unitaryValue: 51.04 },
  { name: "Vassoura voadora", quantity: 56, unitaryValue: 210.0 },
  { name: "Laço da verdade", quantity: 32, unitaryValue: 571.5 },
  { name: "O precioso", quantity: 1, unitaryValue: 9181.923 },
  { name: "Caneta de 250 cores", quantity: 123, unitaryValue: 17 },
  { name: "Plumbus", quantity: 13, unitaryValue: 140.44 },
  { name: "Pokebola", quantity: 200, unitaryValue: 99.9915 },
];
const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace(".", ",");
  return "R$ " + valorAjustado;
};

const produtoTransformado = (listInventory: Product[]) => {
  const teste: Product[] = listInventory
    .map((item) => {
      return {
        ...item,
        unitaryValue: ajustaPreco(item.unitaryValue as number),
      };
    })
    .sort((a: any, b: any) => a.quantity - b.quantity);
  return teste;
};

console.table(produtoTransformado(listInventory));
