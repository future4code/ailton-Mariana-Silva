import { app } from "./app";
import connectionTest from "./endpoints/connectionTest";
import { UserEndpoint } from "./endpoints/createUser";

//Test
app.get("/connectionTest", connectionTest);

//Ex1
// a) Acredito que seja melhor por questão de segurança.

// b) Arquivo feito na pasta service conforme pedido na questão

//Ex2
// a) Chamou a tabela User de userTableName, criou conexão com banco de dados
// Criou a função de criar usuário, coloquei na pasta data no arquivo UserDataBase

/* b) Tabela criada no workbanch
CREATE TABLE User (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
*/

// c) Função criada no data/userData.ts

// Ex3
// a) A linha "as string" garante que o retorno seja uma string. Usamos pois o typescript precisa entender a tipagem correta que está recebendo

// b) Criado no arquivo service/TokenGenerator.ts

// Ex4-a)

const user = new UserEndpoint();

app.post("/user/signup", user.createUser);

// Ex4-b and Ex4-c - Linha 69 do codigo createUser

// Ex5-a)
app.get("/user/byEmail", user.getUserByEmail);

// Ex6-b)
app.get("/user/login", user.login);

// Ex7-a) Pq pode retornar como jwt e não é possível tipar arquivos neste formato, portanto usamos any.

// Ex8
app.get("/user/byId", user.getUserById);