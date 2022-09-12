import axios from "axios";
import { user } from "./type";
import { baseUrl } from "./baseUrl";
import { getSubscribers } from "./Exercicio1";
import { createNews } from "./Exercicio4";

const notification = async (
  AllUsers: user[],
  notific: string
): Promise<void> => {
  try {
    if (!AllUsers || AllUsers === [] || !notific || notific === "") {
    }
    AllUsers.forEach(async (item) => {
      await axios.post(`${baseUrl}/notifications`, {
        subscriberId: item.id,
        message: notific,
      });
    });

    console.log("All notifications were sent.");
  } catch (error: any) {
    console.log(error.message || "Something wrong is not right!");
  }
};

const main = async () => {
  await notification(await getSubscribers(), "Notifications sent.");
};
main();