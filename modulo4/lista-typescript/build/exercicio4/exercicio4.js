var Departament;
(function (Departament) {
    Departament["financial"] = "financeiro";
    Departament["marketing"] = "marketing";
    Departament["sales"] = "vendas";
})(Departament || (Departament = {}));
const arrayEmployeer = [
    {
        name: "Marcos",
        salary: 2500,
        departament: Departament.marketing,
        presential: true,
    },
    {
        name: "Maria",
        salary: 1500,
        departament: Departament.sales,
        presential: false,
    },
    {
        name: "Salete",
        salary: 2200,
        departament: Departament.financial,
        presential: true,
    },
    {
        name: "João",
        salary: 2800,
        departament: Departament.marketing,
        presential: false,
    },
    {
        name: "Josué",
        salary: 5500,
        departament: Departament.financial,
        presential: true,
    },
    {
        name: "Natalia",
        salary: 4700,
        departament: Departament.sales,
        presential: true,
    },
    {
        name: "Paola",
        salary: 3500,
        departament: Departament.marketing,
        presential: true,
    },
];
const filterEmployeer = (Employeer) => {
    const EmployeerMarketing = Employeer.filter((person) => {
        return (person.departament === Departament.marketing && person.presential === true);
    });
    return EmployeerMarketing;
};
console.log(filterEmployeer(arrayEmployeer));
//# sourceMappingURL=exercicio4.js.map