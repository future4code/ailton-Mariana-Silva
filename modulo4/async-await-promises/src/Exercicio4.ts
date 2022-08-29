import axios from "axios";
import { baseUrl } from "./baseUrl";

// Exercicio 4-a) O mais indicado seria POST, mas usei PUT pq quem criou a API usou PUT, 
// que tambem pode ser usado para editar e criar enquanto o POST apenas criar.
// Exercicio 4-b) 
export const createNews = async (
    title: string,
    content: string,
    date: number
  ): Promise<void> => {
  
    try {
  
      const result = await axios.put(`${baseUrl}/news`, {
        title: title,
        content: content, 
        date: date
      })
      if(result) {
        console.log("News created successfully!")
      }
    } catch (error) {
      console.log("Something wrong is not right!")
    }
  }
  
  const main = async() => {
    await createNews("Best dessert", "Ice cream is the best dessert ever", Date.now() )
  }

  main()