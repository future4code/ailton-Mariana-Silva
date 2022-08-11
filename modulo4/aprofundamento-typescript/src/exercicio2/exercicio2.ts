//Observe a função a seguir, escrita em JavaScript:

function obterEstatisticas(numeros: number[]): {} {
    const numerosOrdenados: number[] = numeros.sort(
      (a: number, b: number) => a - b
    );
  
    let soma: number = 0;
    let num: number;
    for (let num of numeros) {
      soma += num;
    }
  
    let maior: number;
    let menor: number;
    let media: number;
  
    const estatisticas: {} = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length,
    };
  
    return estatisticas;
  }
  console.log(obterEstatisticas([21, 18, 65, 44, 15, 18]));
  //a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
  //Entrada: Array de números. Saida, objeto de números
  
  //b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas
  //numerosOrdenados: array de números; soma: número; num: numeros do array; maior, menor e media: number;
  
  //c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
  type amostra = {
    numeros: number[];
    obterEstatisticas: (numeros: number[]) => {
      maior: number;
      menor: number;
      media: number;
    };
  };
  