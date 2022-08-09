import { writeFile, readFile } from "fs";

//QUESTÃO 3
const tasks = ["Wake up", "Brush teeth", "Take a shower"];

let newtask = process.argv[2];
let tasksList = [...tasks, newtask];
let taskString = tasksList.toString();

console.log("Tarefa adicionada com sucesso:", tasksList);

writeFile("lista.txt", taskString, (err) => {
  if (err) throw err;
  console.log("O arquivo foi criado!");
});
readFile("lista.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});