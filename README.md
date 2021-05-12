# ocean-backend-nuvem-12-05-2021

## Download

- **Para rodar Node na sua máquina:** https://nodejs.org/en/download/
- **VSCode - Editor de Códigos (IDE)** https://code.visualstudio.com/download
- **Postman** - Para testar requisições Rest (existem vários outros) - Também pode ser o Insomnia ou a versão Web do Postman, mas recomendo para seguir a aula usar o Postman instalado no PC https://www.postman.com/downloads/
- **JSON Viewer** (Extensão chrome) - Opcional https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=pt-BR
- **Mongo DB Community:** https://www.mongodb.com/try/download/community
  - Se for Windows 7, baixa a versão 4.2.14
- **MongoDB Atlas:** https://www.mongodb.com/cloud/atlas
- **Heroku:** https://www.heroku.com/

## Tópicos

- Apresentação dos ecossistemas de cloud, falando um pouco sobre AWS, Azure, Google Cloud, entre outros
- Criando o repositório do projeto no GitHub
- Subindo os arquivos desenvolvidos no GitHub
- Criação da conta no Heroku
- Integrando o repositório do GitHub no Heroku
- Ativando o deploy automático
- Primeiro deploy da aplicação na nuvem
- Testando a aplicação com o Thunder Client
- Criação da conta na MongoDB Atlas
- Criando a base de dados na nuvem
- Entendendo a string de conexão do MongoDB
- Visualizando a base de dados criada
- Criação da collection
- Implementando a base de dados da nuvem na aplicação backend
- Testando todos os serviços online

## Configurando o arquivo `env`

- Instalar a dependência `dotenv`

  - ```bash
    npm i dotenv
    ```

- Criar um arquivo na raiz do projeto chamado `.env.example` com a estrutura do seu arquivo de environment

- Duplique esse arquivo e renomeie o novo arquivo para `.env`

- Preencha esse novo arquivo com as informações da conexão:

  - ```bash
    DB_HOST=cluster0.zwmgv.mongodb.net
    DB_USER=admin
    DB_PASSWORD=ECnrGWIZ9YBYUHpE
    DB_NAME=ocean_db
    ```

- Abra o arquivo `index.js` e faça o import do `dotenv`, da seguinte forma:

  - ```js
    require('dotenv').config();
    ```

- Em seguida, substitua sua `string` de conexão pelo seguinte trecho:

  - ```js
    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASSWORD;
    const dbHost = process.env.DB_HOST;
    const dbName = process.env.DB_NAME;
    
    const url = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
    ```

- Pronto! Agora é só subir as informações de environment direto no Heroku e os seus dados de acesso ao banco não estarão mais expostos no GitHub

  - **Referência:** https://devcenter.heroku.com/articles/config-vars

- Você também pode colocar o seu repositório como privado e ainda sim conectá-lo ao Heroku sem problemas (isso também para proteger o seu código).
