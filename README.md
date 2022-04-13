
# CRUD de usuário + permissão de administrador

API REST desenvolvida em Node e Express, com autenticação JWT e rotas com permissão de usuário.

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/><space><space>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/><space><space>
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"/><space><space>
	
#### Dependências utilizadas:
- express
- jsonwebtoken
- bcryptjs
- uuid
- nodemon
- sucrase


## Rotas


## POST /users

A propriedade "isAdm" é opcional, tem false como valor default.
#### Requisição:
```json
{
    "name": "teste",
    "email": "teste@email.com",
    "password": "123456",
    "isAdm": true 
}
```
#### Resposta: Status 201 CREATED
```json
{
	"email": "teste@email.com",
	"name": "teste",
	"id": "e2b32c4e-0004-4f1f-be1f-fa66455f0db0"
}
```

### Possíveis erros: 
#### Usuário já existente: Status 400 BAD REQUEST
```json
{
    "message": "E-mail already registered"
}
```

## POST /login
#### Requisição:
```json
{
    "email": "teste@email.com",
    "password": "123456"
}
```
#### Resposta: Status 200 OK
```json
{
    "token": "4b72c6f34b72c6f3-6d0a-6a1-86c6-687d52de4fc7-6d0a-6a1-86c6-687d
    2c6f3-6d0a-6a1-86c6-687d52de4fc74b72c6f3-6d0a-6a1-86c6-687d52de4fc7"
}
```

### Possíveis erros: 
#### Login inválido
#### Resposta: Status 401 UNAUTHORIZED
```json
{
    "message": "Wrong email/password"
}
```
## Rotas que necessitam da autenticação do token JWT

## GET /users

### Requisição:
- Não possui corpo de requisição. 
- Apenas um  usuário admistrador tem acesso permitido à essa rota.

### Resposta: Status 200 OK ( com header de autorização de usuário)
```json
[
    {
        "uuid": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
        "createdOn": "2021-11-18T01:23:52.910Z",
        "updatedOn": "2021-11-18T01:23:52.910Z",
        "name": "teste",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "email": "teste@email.com",
        "isAdm": true
    }
]
```
### Possíveis erros: 
#### Sem header de autorização
#### Resposta: Status 401 UNAUTHORIZED
```json
{
    "message": "Missing authorization headers"
}
```
#### Com header de autorização mas sem ser administrador
#### Resposta: Status 401 UNAUTHORIZED
```json
{
    "message": "Unauthorized"
}
```
## GET /users/profile
#### Requisição:
Não possui corpo de requisição.
#### Resposta: Status 200 OK ( com header de autorização)
```json
{
    "uuid": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
    "createdOn": "2021-11-18T01:23:52.910Z",
    "updatedOn": "2021-11-18T01:23:52.910Z",
    "name": "teste",
    "email": "teste@email.com",
    "isAdm": true
}
```

### Possíveis erros: 
#### Sem header de autorização
#### Resposta: Status 401 UNAUTHORIZED
```json
{
    "message": "Missing authorization headers"
}
```

## PATCH /users/:id

#### Requisição:
```json
{
    "name": "teste",
    "email": "teste@email.com.br"
}
```
#### Resposta: Status 200 OK (com header de autorização)
```json
{
    "uuid": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
    "createdOn": "2021-11-18T01:23:52.910Z",
    "updatedOn": "2021-11-21T07:44:21.520Z",
    "name": "teste"
    "email": "teste@email.com.br",
    "isAdm": true
}
```

### Possíveis erros: 
#### Sem header de autorização
#### Resposta: Status 401 UNAUTHORIZED
```json
{
    "message": "Missing authorization headers"
}
```

#### Com header de autorização mas sem ser administrador
#### Resposta: Status 401 UNAUTHORIZED
```json
{
    "message": "Unauthorized"
}
```

## DELETE/users/:id

#### Requisição:
Não possui corpo de requisição

#### Resposta: Status 200 OK (com header de autorização)
```json
{
    "message": "User deleted with success"
}
```

### Possíveis erros: 
#### Sem header de autorização
#### Resposta: Status 401 UNAUTHORIZED
```json
{
    "message": "Missing authorization headers"
}
```

#### Com header de autorização mas sem ser administrador
#### Resposta: Status 401 UNAUTHORIZED
```json
{
    "message": "Unauthorized"
}
```
