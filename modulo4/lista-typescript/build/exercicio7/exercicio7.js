const listInventory = [
    { name: "MacMugffin", quantity: 37, unitaryValue: 51.04 },
    { name: "Vassoura voadora", quantity: 56, unitaryValue: 210.0 },
    { name: "Laço da verdade", quantity: 32, unitaryValue: 571.5 },
    { name: "O precioso", quantity: 1, unitaryValue: 9181.923 },
    { name: "Caneta de 250 cores", quantity: 123, unitaryValue: 17 },
    { name: "Plumbus", quantity: 13, unitaryValue: 140.44 },
    { name: "Pokebola", quantity: 200, unitaryValue: 99.9915 },
];
const ajustaPreco = (preco) => {
    const valorAjustado = preco.toFixed(2).replace(".", ",");
    return "R$ " + valorAjustado;
};
const produtoTransformado = (listInventory) => {
    const teste = listInventory
        .map((item) => {
        return Object.assign(Object.assign({}, item), { unitaryValue: ajustaPreco(item.unitaryValue) });
    })
        .sort((a, b) => a.quantity - b.quantity);
    return teste;
};
console.table(produtoTransformado(listInventory));
//# sourceMappingURL=exercicio7.js.map