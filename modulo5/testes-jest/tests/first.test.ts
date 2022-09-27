describe("Testes Jest", () => {
  const checkNumber = (n: number): boolean => {
    if (n % 2 == 0) {
      return true;
    }

    return false;
  };
  test("Exercicio 0 - A entrada 112 gera a saída true", () => {
    const input = 112;
    const output = checkNumber(input);

    expect(output).toBe(true);
  });

  const toUpperCase = (str: string): string => {
    return str.toUpperCase();
  };
  test("Exercicio 1 - a entrada “bananinha” gera a saída “BANANINHA”", () => {
    const input = "bananinha";
    const output = "BANANINHA";

    expect(toUpperCase(input)).toBe(output);
  });

  const toSplit = (str: string): string[] => {
    return str.split("");
  };

  test("Exercicio 2 - A entrada 'dev' gera a saída ['d', 'e', 'v']", () => {
    const input = "dev";
    const output = toSplit(input);
    expect(output).toEqual(["d", "e", "v"]);
  });

  const toNumber = (str: string): number => {
    return Number(str);
  };
  test("Exercicio 3 - A entrada “50” gera a saída 50", () => {
    const input = "50";
    const output = toNumber(input);

    expect(output).toBe(50);
  });

  const getLength = (str: string): number => {
    return str.length;
  };

  test("Exercicio 4 - A entrada “jest” gera a saída 4", () => {
    const input = "jest";
    const output = getLength(input);
    expect(output).toBe(4);
  });

  const randomNumberBetween1And10 = (): number => {
    const min = 1;
    const max = 10;
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    return result;
  };
  test("Exercicio 5 - A execução da função gera a saída entre 1 e 10", () => {
    const output = randomNumberBetween1And10();

    expect(output).toBeGreaterThanOrEqual(1);
    expect(output).toBeLessThanOrEqual(10);
  });

  interface IUser {
    id: string;
    name: string;
    age: number;
  }

  const users: IUser[] = [
    {
      id: "1",
      name: "Alice",
      age: 20,
    },
    {
      id: "2",
      name: "Bob",
      age: 18,
    },
    {
      id: "3",
      name: "Astrodev",
      age: 50,
    },
  ];

  test("Exercicio 6 - Verificando se Astrodev, existe na lista", () => {
    const user = {
      id: "3",
      name: "Astrodev",
      age: 50,
    };
    expect(users).toContainEqual(user);
  });

  const calcAverage = (list: number[]): number => {
    let totalSum = 0;

    for (let n of list) {
      totalSum += n;
    }

    const average = Math.ceil(totalSum / list.length);

    return average;
  };

  test("Exercicio 7 - A entrada [10, 4, 7, 6] gera a saída 7", () => {
    const input = [10, 4, 7, 6];

    const output = calcAverage(input);
    expect(output).toBe(7);
  });

  const calcAge = (year: number): number => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    return age;
  };

  test("Exercicio 8 - A entrada 2000 gera a saída 22", () => {
    const input = 2000;
    const output = calcAge(input);

    expect(output).toBe(22);
  });

  const formatDate = (initialDate: string): string => {
    const date = new Date(initialDate);
    const formattedDate = date.toLocaleDateString();

    return formattedDate;
  };

  test("Exercicio 9 - A entrada '2022/09/26' gera a saída '26/09/2022'", () => {
    const input = "2022/09/22";
    const output = formatDate(input);

    expect(output).toBe("22/09/2022");
  });
});
