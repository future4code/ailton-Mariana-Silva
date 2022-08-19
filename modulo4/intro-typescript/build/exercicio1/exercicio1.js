function checaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA !== ladoB && ladoB !== ladoC) {
        return "O triângulo é Escaleno";
    }
    else if (ladoB === ladoB && ladoB === ladoC) {
        return "O triângulo é Equilátero";
    }
    else {
        return "O triângulo é Isósceles";
    }
}
console.log(checaTriangulo(1, 2, 3));
//# sourceMappingURL=exercicio1.js.map