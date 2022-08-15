function checafuncao(n1: number, n2: number): number[] {
  let soma: number = n1 + n2;
  let sub: number = n1 - n2;
  let mult: number = n1 * n2;
  let maiorNumero: number;

  if (n1 > n2) {
    maiorNumero = n1;
  } else {
    maiorNumero = n2;
  }
  return [soma, sub, mult, maiorNumero];
}

console.log(checafuncao(6, 3));
