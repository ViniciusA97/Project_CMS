# Cadastro

> ## Caso de Sucesso
1. Recebe uma requisição do tipo **POST**
2. Valida dados obrigatórios **nome**, **email**, **senha**
3. Valida se o **email** é válido
4. Cria uma conta para o usuário com os dados informados

> ## Exceções
1. Retorna erro **400** se **nome**, **email**, **senha** não forem fornecidos pelo cliente
2. Retorna erro **400** se o **email** for inválido
3. Retorna erro **500** se der erro ao tentar criar a conta do usuário