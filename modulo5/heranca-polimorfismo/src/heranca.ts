// Herança
// Exercicio 1
class User {
    constructor(
      private id: string,
      private email: string,
      private name: string,
      private password: string
    ) {
      console.log("Chamando o construtor da classe User");
    }
  
    public getId(): string {
      return this.id;
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public getName(): string {
      return this.name;
    }
    // Ex4
    public introduceYourself(): string {
      return `Olá, sou ${this.name}. Bom dia!`;
    }
  }
// a) Seria possível imprimir a senha (password) atrelada a essa instância?
// - Não, a senha dessa clase é privada e somente ela pode ter acesso e não existe nenhum método Getter que retorne ela.

// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// - Uma única vez (ou quantas vezes for ativo o new User)
  const newUser = new User("1", "email@email.com", "Mari Andrade", "tst@password")
  console.log("EX1", newUser.getEmail())

// Exercicio 2
  class Customer extends User {
    public purchaseTotal: number = 0;
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      private creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }
// a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?
// - Uma vez, exibindo dados públicos da classe no console
const newCustumer = new Customer("1", "email@email.com", "Mari Andrade", "tst@password", "cardnumberfake");
console.log("EX2", newCustumer);
// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
// - Duas vezes, a primeira por instanciar e a segunda por acessar os dados do User atraves do Customer

// Exercicio 3
console.log(newCustumer.getId());
console.log(newCustumer.getName());
console.log(newCustumer.getEmail());
console.log(newCustumer.getCreditCard());
// a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// - O certo seria dizer não, a senha só pode ser acessada por dentro da classe por conta de ser private, 
// porém se damos console aparece no terminal.

// Exercicios 4 e 5
console.log(newCustumer.introduceYourself())

