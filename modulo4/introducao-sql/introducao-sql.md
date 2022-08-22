### Exercicio 1
a)
VARCHAR para criar variáveis do tipo string,
PRIMARY KEY chave de identificação única,
NOT NULL campo com preenchimento obrigatório
DATA formato de data

b)
SHOW DATABASE e SHOW TABLE mostra os nomes de cada database ou table criadas no schema.

c)
O comando DESCRIBE Actor trouxe as informações precisas da tabela criada anteriormente. 


### Exercicio 2

a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
  );
  ```

b)
Error code: 1062 Duplicate entry "002" for key "PRIMARY"
Tradução = Entrada "002" duplicada

Ou seja - Não é possivel criar duas pessoas com o meu ID


c)
Error Code : 1136. Columm count doesn't have a defaut value
Tadução = A contagem de colunas não tem um valor padrão

Ou seja - Mesmo todas as informações terem sido passadas, não estava correspondendo com o paremetro esperado 

d)
Error Code : 1364. Field "name" doesn't have a default value
Tadução = O nome do campo não tem um valor padrão

Ou seja - Era esperado mais um campo com o dado "name" 

e)

Error Code: 1292. Incorret date value "1950" for column "birth_date" at now row 1
Tradução = Valor de data incorreto para a coluna birth_date na linha 1

Ou seja - O campo birth_date precisa seguir o formato padrão de string "yyyy-mm-dd"

f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
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
```

### Exercicio 3
a)
```
SELECT * from Actor WHERE gender = "female"
```

b)
```
SELECT salary from Actor WHERE name = "Tony Ramos"
```

c)
A pesquisa é valida, mas não foi encontrado nenhum ator, retornando NULL em todos os campos

d)
```
SELECT id, name, salary from Actor WHERE salary < 500000
```

e)
Error Code: 1054. Unknown column "nome" in "field list"
Tradução = Nome de coluna desconhecido na lista de campos

Ou seja - a coluna "nome" não existe, o nome correto do compo criado é "name"


### Exercicio 4
a)
O comando seleciona todos os atores da tabela, onde só vai mostrar os nomes com as iniciais A ou J e que tenha o salario maior que 300000

b)
```
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000
```

c)
```
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```

d)
```
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000
  ```

### Exercicio 5
a)
```
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_de_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);
```

A tabela Filmes foi criada com:

VARCHAR para criar variáveis do tipo string,
PRIMARY KEY chave de identificação única,
NOT NULL campo com preenchimento obrigatório
DATA formato de data
INT para os numeros inteiros 

b)
```
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
001,
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/06/01",
7
);
```

c)
```
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
002,
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/2/27",
10
);
```

d)
```
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
003,
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02",
8
);
```

e)
``` 
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
004,
"Minha Mãe é Uma Peça",
"Hermínia Amaral (Paulo Gustavo) é uma dona de casa de meia idade, divorciada do marido (Herson Capri) que a trocou por uma mulher mais jovem, Soraya (Ingrid Guimarães). ",
"2013/06/21",
7
);
```

### Exercicio 6
a)
```
SELECT id, nome, sinopse FROM Filmes WHERE id = 001
```

b)
```
SELECT * FROM Filmes WHERE nome = "Minha Mãe é Uma Peça"
```

c)
```
SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7
```
### Exercicio 7
a)
```
SELECT * FROM Filmes
WHERE nome LIKE "%minha%";
```

b)
SELECT * FROM Filmes
WHERE nome LIKE "%MINHA%" OR
      sinopse LIKE "%minha%";


c)
```
SELECT * FROM Filmes WHERE data_de_lancamento < CURRENT_DATE()
```

d)
```
SELECT * FROM Filmes
WHERE data_de_lancamento < CURRENT_DATE() AND 
      (nome LIKE "%minha%" OR
      sinopse LIKE "%minha%") AND avaliacao > 7
```