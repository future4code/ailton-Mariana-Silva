function labenuEstudante(
  idade: number,
  emCompleto: boolean,
  hrDisponivel: number,
  periodo: string
): boolean {
  if (
    idade >= 18 &&
    emCompleto &&
    ((hrDisponivel >= 40 && periodo === "integral") ||
      (hrDisponivel >= 20 && periodo === "noturno"))
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(labenuEstudante(18, true, 40, "integral"));
