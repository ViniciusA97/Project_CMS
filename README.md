## Install:
    yarn

### Comands:
    yarn add express
    yarn add typescript
    yarn add ts-node-dev -D
    yarn add @types/express -D
    yarn add uuidv4
    yarn add dotenv
    yarn add mysql
    yarn add jest -D @types/jest ts-jest
    yarn add typeorm
    yarn add jsonwebtoken
    yarn add bcrypt

### teste:
    yarn start
    Rota de teste: localhost:3333/test
    Essa rota deve retornar um json {"sucess":"true"} e um http status 200
    Teste de configuração do banco de dados: localhost:3333/testConnection. essa rota deve retorar {id: 'Algum id muito grande gerado pelo uuid4'}
    Teste de token: Fazer login na rota post /login passando um json: {"email":"email","password":"teste"}. Na resposta da requisição deve vim um token. Testar o token na rota get /validateToken passando no header: "Authorization": "Bearer token"

### Recomendação:
    Alterar as configurações do arquivo ormconfig.json
    Setar um banco de dados com o mesmo nome e usuario para evitar edições no arquivo para ambos
