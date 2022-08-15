export type Users = {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;
};

export const userList: Users[] = [
  {
    id: 1,
    name: "Jil",
    phone: "(11)95554-4445",
    email: "jil@gmail.com",
    website: "jil.com.br",
  },
  {
    id: 2,
    name: "Mariana",
    phone: "(11)94564-4565",
    email: "mariana@gmail.com",
    website: "mariana.com.br",
  },
  {
    id: 3,
    name: "Talita",
    phone: "(41)95784-8885",
    email: "tali@gmail.com",
    website: "talita.com.br",
  },
  {
    id: 4,
    name: "Clear",
    phone: "(41)00000-0000",
    email: "clear@gmail.com",
    website: "clear.com.br",
  },
];

// exercicio 5
export type Posts = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
// exercicio 6 - achei melhor fazer sparado, para evitar confusão quando for adicionado ou removido um post ou usuario
export const postList: Posts[] = [
  {
    id: 1,
    title: "Bom dia",
    body: "Bom dia polvos e polvas",
    userId: 1,
  },
  {
    id: 2,
    title: "Duvida",
    body: "Bom dia pessoal, to com uma duvida no exercicio 6",
    userId: 2,
  },
  {
    id: 3,
    title: "Git",
    body: "To com um probleminha no Git, alguem pode me ajudar?",
    userId: 3,
  },
  {
    id: 4,
    title: "Boa tarde",
    body: "Bom tarde pessoal, vai ter plantão hoje?",
    userId: 1,
  },
];
