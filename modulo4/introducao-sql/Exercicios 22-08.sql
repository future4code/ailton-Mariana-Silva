CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

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
VALUES(
004,
"Minha Mãe é Uma Peça",
"Hermínia Amaral (Paulo Gustavo) é uma dona de casa de meia idade, divorciada do marido (Herson Capri) que a trocou por uma mulher mais jovem, Soraya (Ingrid Guimarães). ",
"2013/06/21",
7
);

SELECT id, nome, avaliacao FROM Filmes WHERE id = 001;

SELECT * FROM Filmes WHERE nome = "Minha Mãe é Uma Peça";

SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7;

SELECT * FROM Filmes WHERE nome LIKE "%Minha%";

SELECT * FROM Filmes
WHERE nome LIKE "%Minha%" OR
      sinopse LIKE "%minha%";
      
SELECT * FROM Filmes WHERE data_de_lancamento < CURRENT_DATE();

SELECT * FROM Filmes
WHERE data_de_lancamento < CURRENT_DATE() AND 
      (nome LIKE "%minha%" OR
      sinopse LIKE "%minha%") AND avaliacao > 7;


