### Exercicios

1-a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
- Round é a quantidade de rodadas que o algoritmo de hashing será executado para gerar o salt 
- Salt é uma string aleatória que faz com que a hash seja imprevisível.

1-b) Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs. 
- Código criado

1-c) Agora, crie a função que verifique se uma string é correspondente a um hash, use a função compare do bcryptjs
- Código criado

2-a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
- O Cadastro, pois precisamos ter o hash cadastrado para poder compara-los 

2-b) Faça a alteração do primeiro endpoint
- Código criado

2-c) No exercício de ontem, nós criamos o endpoint user/profile. 
Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.
- Não precisa pois este endpoint não utiliza senha, nem a do usuario e nem a criptografada.

3-a) Altere a sua tabela de usuários para ela possuir uma coluna role. Considere que pode assumir os valores normal  e admin. 
Coloque normal como valor padrão.
- ALTER TABLE User ADD COLUMN role VARCHAR(255) DEFAULT "NORMAL" NOT NULL;

3-b) *Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*
- Código criado

3-c) *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação. (Não esqueça de adicionar na função query para inserir agora o valor de role do usuário à coluna role no banco)*
- Código criado

3-d) *Altere o login para criar o token com o `role` do usuário*
- Código criado

4, 5 e 6
- Código criado


