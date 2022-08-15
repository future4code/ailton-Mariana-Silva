//QUESTÃO 2
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
const operation = process.argv[2];

switch (operation) {
  case "sum":
    console.log(num1 + num2);
    break;
  case "sub":
    console.log(num1 - num2);
    break;
  case "mult":
    console.log(num1 * num2);
    break;
  case "div":
    console.log(num1 / num2);
    break;
  default:
    console.log("\033[0;35m Não existe operação matemática aqui");
    break;
}
