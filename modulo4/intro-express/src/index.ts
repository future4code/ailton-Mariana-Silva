import express from "express";
import cors from "cors";
import { Users, userList, Posts, postList } from "./data";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/exercicio1", (request, response) => {
  response.send("Hello sou o exercicio1");
});

app.get("/users", (request, response) => {
  response.send(userList);
});

// exercicio 7
app.get("/posts", (request, response) => {
  response.send(postList);
});

// exercicio 8
app.get("/posts/:id", (request, response) => {
  const idUser = Number(request.params.id);

  const findPosts: Posts[] = postList.filter((item) => {
    return item.userId === idUser;
  });
  response.send(findPosts);
});

//exercicio 9
app.delete("/post/:id", (request, response) => {
  const idPost = Number(request.params.id);

  const deletePosts: Posts[] = postList.filter((item) => {
    return item.id !== idPost;
  });

  response.send(deletePosts);
});

//exercicio 10
app.delete("/user/:id", (request, response) => {
  const idUser = Number(request.params.id);

  const deleteUser: Users[] = userList.filter((item) => {
    return item.id !== idUser;
  });

  response.send(deleteUser);
});

//exercicio 11(extra)
app.post("/addPost", (request, response) => {
  const newPost = request.body;

  postList.push(newPost);

  response.status(201).send({ Mensagem: "Post adicionado com sucesso" });
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
