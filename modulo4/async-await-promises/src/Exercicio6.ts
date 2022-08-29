import axios from "axios";
import { user } from "./type";
import { baseUrl } from "./baseUrl";
import { getSubscribers } from "./Exercicio1";
import { createNews } from "./Exercicio4";

// Exercicio 6-a) Traz o retorno conforme terminou a execução, sem ser em order. 
// Retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou 
// quando o iterável passado como argumento não contém promises.
// Exercicio 6-b) A vantagem é que não há grande discrepancia na entrega das promises(renderização)
//também por ser um processo assíncrono pode rodar no background enquanto outras funções rodam também.
//caso uma das promises não seja entrega um erro será gerado e o código não vai simplesmente quebrar.
// Exercicio 6-c) 
const notificationPromiseAll = async (
  AllUsers: user[],
  notific: string
): Promise<any> => {
  try {
    if (!AllUsers || AllUsers === [] || !notific || notific === "") {
      throw new Error("Inform all request data.");
    }
    const notify = AllUsers.map(async (item) => {
      return await axios.post(`${baseUrl}/notifications`, {
        subscriberId: item.id,
        message: notific,
      });
    });

    const returnNotify = await Promise.all(notify);

    console.log("Okay");
  } catch (error: any) {
    console.log(error.message || "Something wrong is not right!");
  }
};

const main = async () => {
  await notificationPromiseAll(await getSubscribers(), "Notifications sent.");
};
main();
