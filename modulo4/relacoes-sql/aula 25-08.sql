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

INSERT INTO Rating (id, comment, rate, Filmes_id) VALUES 
(007, "Não gostei!", 1, 007);

ALTER TABLE Filmes DROP COLUMN rating;

 DELETE FROM Filmes WHERE id = "001"; 
 
 CREATE TABLE MovieCast (
Filmes_id VARCHAR(255),
actor_id VARCHAR(255),
FOREIGN KEY (Filmes_id) REFERENCES Filmes(id),
FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast(Filmes_id, actor_id) VALUES("007", "003");

INSERT INTO Filmes(id, nome, sinopse, playing_limit_date, data_de_lancamento) VALUES (
    "007",
    "Top Gun: Maverick",
	"Avatar: The Way of Water é um futuro filme épico de ficção científica americano co-escrito, co-editado, co-produzido e dirigido por James Cameron, e produzido pela 20th Century Studios, com sua data de lançamento prevista para 16 de dezembro de 2022. Será a sequência de Avatar",
	"2022-09-25",
    "2022-08-25"
);

DELETE FROM Actor WHERE id = "001"; 

SELECT Filmes.id, name, rate FROM Filmes
JOIN Rating
ON Filmes.id = Rating.Filmes_id 
WHERE avaliacao.rate IS NOT NULL;




