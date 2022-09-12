import axios from 'axios'
import { baseUrl } from './baseUrl'


// Exercicio 1-a) A diferença está na sintaxe e na posição do async que na função regular vem antes da declaração da função.
// Exercicio 1-b) Arrow function
const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    console.log(response.data)
    return response.data
  };

  const main = async() => {
    await getSubscribers()
  };
  main()