import axios from "axios";
import { baseUrl } from "./baseUrl";
import { user } from "./type";

// Exercicio 1-a) Não teremos erro de tipagem porque o retorno da nossa função será id, name e email. 
// (obs.: Caso a tipagem esteja em outro arquivo é necessário importa-la) 
// Exercicio 1-b) É boa pratica fazer o mapeamento quando o retorno é uma Promise<any>, pois como o próprio nome diz, ela retornará
// qualquer coisa. Por isso, fazemos o mapeamento para que retorne só o que sera util, como nesse caso o id, name e email.
// Exercicio 1-c)
const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    console.log(response.data)
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };

  const main = async() => {
    await getSubscribers()
  };
  main()