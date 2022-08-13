function checaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA !== ladoB && ladoB !== ladoC) {
        return "O triângulo é Escaleno";
    }
    else if (ladoB === ladoB && ladoB === ladoC) {
        return "O triângulo é Equilátero";
    }
    else {
        return "O triândulo é Isósceles";
    }
}
console.log(checaTriangulo(3, 3, 3));
//# sourceMappingURL=index.js.map