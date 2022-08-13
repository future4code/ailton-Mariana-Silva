const clients = [
    { client: "João", balanceTotal: 1000, debts: [100, 200, 300] },
    { client: "Paula", balanceTotal: 7500, debts: [200, 1040] },
    { client: "Pedro", balanceTotal: 10000, debts: [5140, 6100, 100, 2000] },
    { client: "Luciano", balanceTotal: 100, debts: [100, 200, 1700] },
    { client: "Artur", balanceTotal: 1800, debts: [200, 300] },
    { client: "Soter", balanceTotal: 1200, debts: [] },
];
const negativeBalance = (clients) => {
    let total;
    let debtsBalance;
    let resultado = [];
    for (const item of clients) {
        total = item.debts.reduce((total, number) => {
            return total + number;
        }, 0);
        debtsBalance = item.balanceTotal - total;
        item.balanceTotal = debtsBalance;
        item.debts = [];
        if (debtsBalance < 0) {
            resultado.push(item);
        }
    }
    return resultado;
};
console.log(negativeBalance(clients));
//# sourceMappingURL=exercicio6.js.map