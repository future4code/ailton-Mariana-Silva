### Exercicio 1

a)

```
ALTER TABLE Actor DROP COLUMN salary;;
```

- O comando acima deleta a coluna salário da tabela ator

b)

```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

- O comando acima altera o nome da coluna gender para sex e altera o tipo de dado para string com limite de 6 caracteres;

c)

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

- O comando acima altera o tipo da coluna gender de ENUM para string com até 255 caracteres.

d)

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

- O comando acima altera a coluna gender para aceitar strings de até 100 caracteres

### Exercicio 2

a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003 (Troquei o id 002, pois deixei repetido ontem)

```
UPDATE Actor
SET
name = "Moacyr Franco",
birth_date = "1936-10-05"
WHERE id = "002";
```

b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior:

```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

c) Escreva uma query que atualize todas as informações do ator com o id 005:

```
UPDATE Actor
SET
name = "Moacyr Franco",
birth_date = "1940-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";
```

d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado:

```
UPDATE Actor
SET
name = "Cauã Reimond",
birth_date = "1985-11-02",
salary = 700000,
gender = "male"
WHERE id = "010";
```

- Resultado: O comando não apresentou nenhum erro, mas apareceu a mensagem de que 0 linhas foram atualizadas, e quando rodei a tabela não apareceu nenhuma informação.

### Exercicio 3

a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro:

```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00 (testei com um valor menor para ver funcionando):

```
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 700000;
```

### Exercicio 4

a) Escreva uma query que pegue o maior salário de todos os atores e atrizes:

```
SELECT MAX(salary) FROM Actor;
```

b) Escreva uma query que pegue o menor salário das atrizes:

```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c) Escreva uma query que pegue a quantidade de atrizes:

```
SELECT COUNT() FROM Actor WHERE gender = "female";
```

d) Escreva uma query que pegue a soma de todos os salários:

```
SELECT SUM(salary) FROM Actor;
```

### Exercicio 5

a) Releia a última query. Teste-a. Explique o resultado com as suas palavras:

```
SELECT COUNT() AS "quantidade", gender
FROM Actor
GROUP BY gender;
```

- Na query acima retornou a quantidade de atores e atrizes na tabela agrupados por gênero.

b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética:

```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c) Faça uma query que retorne todos os atores ordenados pelo salário:

```
SELECT  FROM Actor
ORDER BY salary;
```

d) Faça uma query que retorne os atores com os três maiores salarios:

```
SELECT  FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e) Faça uma query que retorne a média de salário por gênero:

```
SELECT ROUND(AVG(salary)) AS "Média salarial", gender FROM Actor
GROUP BY gender;
```

### Exercicio 6

a) Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema:

```
ALTER TABLE Filmes ADD playing_limit_date DATE;
```

b) Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`:

```
ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;
```

c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído:

```
UPDATE FILMES SET playing_limit_date = "22/08/2022" WHERE id = 001;
```

```
UPDATE FILMES SET playing_limit_date = "22/08/2023" WHERE id = 002;
```

d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique:
Deleta filme:

```
DELETE FROM Filmes WHERE id = 001;
```

Update da sinopse

```
UPDATE Filmes SET sinopse = "Teste" WHERE id = 001
```

- Não apresentou nenhum erro, mas apareceu a mensagem de que 0 linhas foram atualizadas, e quando rodei a tabela não apareceu nenhuma a informação da nova sinopse, pois o id não existe mais.

### Desafios:

### Exercicio 7

a) Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?

```
SELECT COUNT(*) FROM Filmes WHERE avaliacao > 7.5;
```

b) Qual a média das avaliações dos filmes?

```
SELECT AVG(avaliacao) FROM Filmes;
```

c) Qual a quantidade de filmes em cartaz?

```
SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURRENT_DATE();
```

d) Qual a quantidade de filmes que ainda irão lançar?

```
SELECT COUNT(*) FROM Filmes WHERE data_de_lancamento;
```

e) Qual a maior nota dos filmes?

```
SELECT MAX(avaliacao) FROM Filmes;
```

f) Qual a menor nota dos filmes?

```
SELECT MIN(avaliacao) FROM Filmes;
```

### Exercicio 8

a) Retorne todos os filmes em ordem alfabética:

```
SELECT nome AS Filmes FROM Filmes ORDER BY nome ASC;
```

b) Retorne os 5 primerios filmes em ordem descrente alfabética:

```
SELECT * FROM Filmes ORDER BY nome DESC LIMIT 5;
```

c) Retorne os 3 filmes mais recentes em cartaz:

```
SELECT * FROM Filmes WHERE playing_limit_date > CURRENT_DATE() ORDER BY data_de_lancamento DESC LIMIT 3;
```

d) Retorne os 3 filmes melhor avalidos:

```
SELECT * FROM Filmes ORDER BY avaliacao DESC LIMIT 2;
```
