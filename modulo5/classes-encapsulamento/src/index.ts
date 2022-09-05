import { app } from "./app";
import connectionTest from "./endpoints/connectionTest";

//Test
app.get("/connectionTest", connectionTest);

// Exercicio 1 - a) É uma função de inicialização de uma classe, que quando invocadas no momento em que objetos desta classe são criadas

// Exercicio 1 - b)
import { Transaction } from "./types";

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: TransactionClass[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Console1:", "Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public get(): string {
    return this.cpf;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getBalance(): number {
    return this.balance;
  }

  public getTransactions(): TransactionClass[] {
    return this.transactions;
  }

  public postTransaction(spend: TransactionClass): TransactionClass[] {
    this.transactions.push(spend);
    return this.transactions;
  }
}

const client1 = new UserAccount("123.123.123-01", "Mia", 7);
const client2 = new UserAccount("123.123.123-02", "Gatuno", 9);

//c) Se a classe determinou uma função dentro dela para acesso.

// Exercicio 2 
class TransactionClass {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    console.log(
      "Console2:",
      "Chamando o construtor da classe TransactionClass"
    );
    this.description = description;
    this.value = value;
    this.date = date;
  }

  public getDescription(): string {
    return this.description;
  }

  public getValue(): number {
    return this.value;
  }

  public getDate(): string {
    return this.date;
  }
}

const transaction1 = new TransactionClass("Whiskas sache", 2.3, "2022-09-05");

console.log(
  "Console3: cliente 1, e 2 transação 1.",
  client1,
  client2,
  transaction1
);

client1.postTransaction(transaction1);
client2.postTransaction(
  new TransactionClass("Whiskas sache Felix", 1.99, "2022-09-04")
);

console.log("Console4: cliente 1 e 2 com transações.", client1, client2);

// Exercicio 3
class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

  public getAccounts(): UserAccount[] {
    return this.accounts;
  }

  public postNewUser(newUser: UserAccount) {
    this.accounts.push(newUser);
  }
}

