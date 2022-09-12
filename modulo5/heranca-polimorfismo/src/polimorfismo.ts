// Polimorfismo
// Exercicio 1
interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(parametro: number): number;
    // Retorna o valor da conta em reais
  }
// a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
// - Retornou todas as propriedades inseridas e a função calculateBill
  const clientTest: Client = {
    name: "Maluzera",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
      return 2;
    },
  };  
    console.log(clientTest.name);
    console.log(clientTest.registrationNumber);
    console.log(clientTest.consumedEnergy);
    console.log(clientTest.calculateBill(2));

// Exercicio 2
abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }
// a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
// - Não é possivel instanciar uma classe abstrata
// const placeteste = new Place("09750-320") --> error

// b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
// - Com a palavra reservada extends conseguimos ter acesso aos dados da interface
class NewPlaceClass extends Place {
    constructor(protected cep: string) {
      super(cep);
    }
  }

const placeTest = new NewPlaceClass("09750-320");
console.log(placeTest);

// Exercicio 3 
  class Residence extends Place {
    constructor(
      private dwellersQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }
    
    public getDwellersQuantity(): number {
      return this.dwellersQuantity
    }
  }
  class Commerce extends Place {
    constructor(
      private floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
  
    public getFloorsQuantity(): number {
      return this.floorsQuantity;
    }
  }
    class Industry extends Place {
    constructor(
      private machinesQuantity: number,
      // Refere-se à quantidade de máquinas do local
  
      cep: string
    ) {
      super(cep);
    }
  
    public getMachinesQuantity(): number {
      return this.machinesQuantity;
    }
  }
// a) O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)
// - Criar instancia da classe abstrata é possivel quando declaramos uma classe filha e a instanciamos.
// b) Por que a Place não é uma interface?
// - Porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.
// c) Por que a classe Place é uma Classe Abstrata?
// - Porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

// Exercicio 4 
class ResidentialClient extends Residence implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cpf: string,
      residentsQuantity: number,
      cep: string
    ) {
      super(residentsQuantity, cep);
    }
  
    public getCpf(): string {
      return this.cpf;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.75;
    }
  }

// a) Que métodos e propriedades essa classe possui? Por quê?
// - Metodos herdados pela classe Residence e Clients

// Exercicio 5
class CommercialClient extends Commerce implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      floorsQuantity: number,
      cep: string
    ) { super(floorsQuantity, cep); }
    public calculateBill(): number { return this.consumedEnergy * 0.53; }
    public getCnpj(): string { return this.cnpj; }
  }
// a) Quais as semelhanças dessa classe com a ResidentialClient?
// As duas são filhos da classe Place e extendem a interface Client
// b) Quais as diferenças dessa classe com a ResidentialClient ?
// - Mesmo as funções dessas classes serem semelhantes os metodos são diferentes, no residentialClient tem o cep e a outra classe tem o cnpj
  
  // Exercicio 6
  class IndustrialClinet extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private insdustryNumber: string, 
      getMachinesQuantity: number,
      cep: string
    ) { super(getMachinesQuantity, cep); }
  
    public getIndustryNumber(): string { return this.insdustryNumber; }
    public calculateBill(): number { return this.consumedEnergy * 0.45 + this.getMachinesQuantity() * 100; }
  }
//a) De qual classe a IndustrialClient deve ser filha? Por quê?
// - O IndustrialClients precisa do método getIndustryNumber herdado pelo pai. 
// Como IndustrialClients é independente é necessário herdar seus métodos.

// b) Que interface a IndustrialClient implementa? Por quê?
// - Industria, cliente e parte dos dados necessário está nessa interface

// c) Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?
// - Por que parte desses dados não podem ser alterados nas classes filhas.
