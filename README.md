
# Back-end Desafio Gestor de Tarefas

Este repositório contém o código-fonte para um desafio de back-end do Gestor de Tarefas. O objetivo do projeto é criar uma API para gerenciar tarefas em uma aplicação web.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js (versão 14 ou superior)
- Yarn
- Docker
- Docker Compose

## Instalação

Siga as etapas abaixo para configurar e executar o projeto em seu ambiente local:

1. Clone o repositório:

```shell
git clone https://github.com/BR-Junior/back-end-desafio-gestor-de-tarefas.git
```

2. Navegue até o diretório do projeto:

```shell
cd back-end-desafio-gestor-de-tarefas
```

3. Execute o comando Docker Compose para iniciar o ambiente:

```shell
docker-compose up
```

Isso irá iniciar o contêiner do PostgreSQL.

4. Instale as dependências do projeto usando o Yarn:

```shell
yarn install
```

5. Crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis de ambiente com as informações iguais as contidas no arquivo `env-example`.

6. Execute os comandos abaixo para gerar as migrations e criar a estrutura do banco de dados:

```shell
yarn run migration:generate
```

```shell
yarn run migration:run
```

7. Inicie o servidor:

```shell
yarn run start
```

O servidor será executado na porta 3333.

8. Acesse a documentação da API utilizando o Swagger:

```plaintext
http://localhost:3333/api-docs
```

Certifique-se de substituir `localhost:3333` pelo endereço correto se estiver executando em um ambiente diferente.


## Testes

O projeto inclui testes automatizados utilizando o framework Jest. Para executar os testes, utilize o seguinte comando:

```shell
yarn test
```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Esse
é o arquivo README.md do projeto. Para mais informações, consulte o código-fonte e os arquivos de documentação no repositório: [back-end-desafio-gestor-de-tarefas](https://github.com/BR-Junior/back-end-desafio-gestor-de-tarefas).
