

## Installation

```bash
yarn
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```


BACKEND DEVELOPER CHALLENGE
Este é um desafio simples para testar suas habilidades na 
construção de APIs. Os serviços da ABLA usam principalmente Python 
e Node.js.
O Desafio

Crie uma API simples para gerenciar Clientes. Esta API deve 
permitir:
Criar um cliente - ok
Editar um cliente - ok
Obter um cliente específico - ok
Listar clientes - ok
Enviar um Bug - ok

Um Cliente deve ter os seguintes campos:
NOME - ok
CNPJ - ok
E-MAIL - ok

[ Envio de Bugs vinculado ao ID do cliente] - ok
Data de criação
Nome do problema
grau do problema (de 1 a 5)
ex: erro de cadastro, urgência 2

Além disso, criar um endpoint para trazer os 10 clientes os 
problemas mais urgentes a serem resolvidos. - ok

Requisitos
Todas as respostas da API devem ser JSON
Fornecer um arquivo README.md com instruções de uso (como 
executar, endpoints etc)

Recomendações
Tests, tests and tests
Postman
Github
Código e commits em inglês (métodos, classes, variáveis, etc)

Avaliação
Estrutura, arquitetura e organização do projeto
Boas práticas de programação
Alcance dos objetivos propostos.

Entrega
Seu repositório deve ser público.
Enviar um e-mail para bruno@snlv.com.br com a url da sua solução.


## ENDPOINTS

POST : Create client
http://localhost:3000/client

BODY:
{
	"name":"Pedro",
	"cnpj":"12312312312",
	"email":"pedro@gmail.com"
}

GET: Get All Client
http://localhost:3000/client/


GET: Get ONE Client
http://localhost:3000/client/:id

PATCH: Update Client
http://localhost:3000/client/:id

POST: Create Report
http://localhost:3000/report

{
	"bug":{
	"description":"Erro grave",
	"level":2
},
	"email":"pedro@gmail.com"
}

GET: TOP 10 REPORT: 
http://localhost:3000/report/top10