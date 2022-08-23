SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor 
SET 
	name = "Moacyr Franco",
	birth_date = "1936-10-05"
WHERE id = "002";

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "1940-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

UPDATE Actor
SET 
name = "Cauã Reimond",
birth_date = "1985-11-02",
salary = 700000,
gender = "male"
WHERE id = "013";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 700000;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT COUNT(*) AS "quantidade", gender
FROM Actor
GROUP BY gender;

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT ROUND(AVG(salary)) AS "Média salarial", gender FROM Actor
GROUP BY gender;

SELECT * FROM Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
  );
  
  INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Lima Duarte",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Antonio Fagundes",
  719333.33,
  "1950-03-26", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "008", 
  "Debora Secco",
  719333.33,
  "1980-03-10", 
  "female"
);

SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%a%")
  AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_de_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);
ALTER TABLE Filmes ADD playing_limit_date DATE;

ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;

UPDATE Filmes SET playing_limit_date = "2022-08-22" WHERE id = 001;

UPDATE Filmes SET playing_limit_date = "2023-08-23" WHERE id = 002;

DELETE FROM Filmes WHERE id = 001;

UPDATE Filmes SET sinopse = "Teste" WHERE id = 001;

SELECT COUNT(*) FROM Filmes WHERE avaliacao > 7.5;

SELECT AVG(avaliacao) FROM Filmes;

SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURRENT_DATE();

SELECT COUNT(*) FROM Filmes WHERE data_de_lancamento;

SELECT MAX(avaliacao) FROM Filmes;

SELECT MIN(avaliacao) FROM Filmes;

SELECT nome AS Filmes FROM Filmes ORDER BY nome ASC;

SELECT * FROM Filmes ORDER BY nome DESC LIMIT 5;

SELECT * FROM Filmes ORDER BY avaliacao DESC LIMIT 2;

SELECT * FROM Filmes;

INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
001,
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/06/01",
7
);
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
005,
"Se Eu Fosse Você 2",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2009/06/01",
8
);
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
002,
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/2/27",
10
);
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
003,
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02",
8
);
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)


SELECT id, nome, avaliacao FROM Filmes WHERE id = 001;

SELECT * FROM Filmes WHERE nome = "Minha Mãe é Uma Peça";

SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7;

SELECT * FROM Filmes WHERE nome LIKE "%Minha%";

SELECT * FROM Filmes
WHERE nome LIKE "%Minha%" OR
      sinopse LIKE "%minha%";



