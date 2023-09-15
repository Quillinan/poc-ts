# poc-ts
CRUD para realizar um POC (proof of concept) usando TypeScript e Postgres

deploy on Render: 

POST: /film
Body: {
  "name": "Filme de Teste",
  "platform": "Netflix",
  "genre": "Drama",
  "status": "Assistido", //Aceita apenas "Assistido" ou "Não assistido"
  "note": 9.0, //Opcional
  "summary": "Um filme de teste para criar no banco de dados." //Opcional
}

GET: /film?platform=Netflix

UPDATE: /film
Body: {
  "id":1
  "name": "Filme de Teste",
  "platform": "Netflix",
  "genre": "Ação",
  "status": "Assistido",
  "note": 9.0,
  "summary": "Um segundo filme de teste para criar no banco de dados."
}

DELETE: /film/1
