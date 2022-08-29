### Exercício 1

a)
Chave estrangeira, ou Foreign Key, é a chave que permite fazer referência a registros de outras tabelas.

b)

```
CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
Filmes_id VARCHAR(255),
FOREIGN KEY (Filmes_id) REFERENCES Filmes(id)
);

INSERT INTO Rating (id, comment, rate, Filmes_id) VALUES
(001, "Excelente!", 9.2, 001),
(002, "Muito bom!", 7, 002),
(003, "Mais ou menos!", 4, 003),
(004, "Não gostei!", 2, 004),
(005, "Excelente!", 9.8, 005);
```

c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails.
Tradução: Código do erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma estrangeira falha na restrição de chave.

d)

```
ALTER TABLE Filmes DROP COLUMN rating;
```

e)

```
 DELETE FROM Filmes WHERE id = "001";
```

### Exercicio 2

a)
Essa tabela cria um relacionamento entre atores e filmes, mostra quais atores estão em um filme.

b)
```
CREATE TABLE MovieCast (
Filmes_id VARCHAR(255),
actor_id VARCHAR(255),
FOREIGN KEY (Filmes_id) REFERENCES Filmes(id),
FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
c)
```
INSERT INTO MovieCast(Filmes_id, actor_id) VALUES("007", "003");
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails.
Tradução: Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha.

d)
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails.
Tradução: Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha.

### Exercicio 3
a)
O ON busca um correspondente na outra tabela e retorna as informações.

b)
```
SELECT Filmes.id, name, rate FROM Filmes
JOIN Rating
ON Filmes.id = Rating.Filmes_id 
WHERE avaliacao.rate IS NOT NULL;
``
