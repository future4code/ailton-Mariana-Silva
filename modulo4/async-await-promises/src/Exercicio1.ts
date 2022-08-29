import axios from 'axios'
import { baseUrl } from './baseUrl'

// Exercicio 1-a) Usamos o endpoint Get para pegar as informações.
// https://labenews.herokuapp.com/subscribers
// Exercicio 1-b) Promise<any[]>
// Exercicio 1-c)
export async function getSubscribers(): Promise<any[]> {
     const response = await axios.get(`${baseUrl}/subscribers`)
    console.log(response.data)
    return response.data;
  };
  
  const main = async() => {
    await getSubscribers()
  };
  main()