const parameterType = (parameter) => {
    if (typeof parameter !== "object") {
        return typeof parameter;
    }
    else if (Array.isArray(parameter)) {
        return "array";
    }
    else {
        return "object";
    }
};
console.log(parameterType(""));
console.log(parameterType(1 === 1));
console.log(parameterType([1, 2, 3]));
console.log(parameterType({ num1: 1, num2: 2 }));
//# sourceMappingURL=exercicio2.js.map