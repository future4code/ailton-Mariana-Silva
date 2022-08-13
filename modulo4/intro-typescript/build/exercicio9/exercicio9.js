function labenuEstudante(idade, emCompleto, hrDisponivel, periodo) {
    if (idade >= 18 && emCompleto && (hrDisponivel >= 40 && periodo === "integral" || hrDisponivel >= 20 && periodo === "noturno")) {
        return true;
    }
    else {
        return false;
    }
}
console.log(labenuEstudante(17, true, 40, "integral"));
//# sourceMappingURL=exercicio9.js.map