# 🚤 API REST de Controle de Embarcações

API REST desenvolvida com **Node.js**, **Express** e **PostgreSQL** utilizando o padrão arquitetural **MVC (Model-View-Controller)** para gerenciamento de embarcações.

## 📋 Objetivo

Permitir o cadastro, consulta, atualização e exclusão de embarcações através de uma API REST.

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- pg
- dotenv
- nodemon

---

## 📁 Estrutura do Projeto

```bash
src/
│
├── config/
│   └── database.js
│
├── models/
│   └── embarcacaoModel.js
│
├── controllers/
│   └── embarcacaoController.js
│
├── routes/
│   └── embarcacaoRoutes.js
│
├── app.js
└── server.js
```

---

## 🗄️ Banco de Dados

### Tabela: embarcacao

| Campo | Tipo |
|---------|---------|
| numero_patrimonio | VARCHAR(20) |
| nome | VARCHAR(100) |
| tipo | VARCHAR(50) |
| situacao | VARCHAR(30) |

### Script SQL

```sql
CREATE TABLE embarcacao (
    numero_patrimonio VARCHAR(20) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    situacao VARCHAR(30) NOT NULL
);
```

---

## 📦 Exemplo de Registro

```json
{
  "numero_patrimonio": "EMB-001",
  "nome": "Lancha Guará",
  "tipo": "Lancha de Patrulha",
  "situacao": "Disponível"
}
```

---

## 🚀 Instalação

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/api-embarcacoes.git
```

### 2. Entrar na Pasta

```bash
cd api-embarcacoes
```

### 3. Instalar Dependências

```bash
npm install
```

### 4. Configurar Variáveis de Ambiente

Criar um arquivo `.env`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=senha
DB_NAME=embarcacoes_db

PORT=3000
```

### 5. Executar o Projeto

```bash
npm run dev
```

ou

```bash
node server.js
```

---

## 🔗 Rotas da API

### Cadastrar embarcação

```http
POST /embarcacoes/cadastrar
```

### Listar todas as embarcações

```http
GET /embarcacoes/listar
```

### Buscar embarcação por patrimônio

```http
GET /embarcacoes/listar/:numero_patrimonio
```

### Atualizar completamente

```http
PUT /embarcacoes/editar/total/:numero_patrimonio
```

### Atualizar parcialmente

```http
PATCH /embarcacoes/editar/parcial/:numero_patrimonio
```

### Excluir embarcação

```http
DELETE /embarcacoes/excluir/:numero_patrimonio
```

### Excluir todas as embarcações

```http
DELETE /embarcacoes/excluir/todos
```

---

## 📌 Exemplo de Requisição

### POST

```json
{
  "numero_patrimonio": "EMB-001",
  "nome": "Lancha Guará",
  "tipo": "Lancha de Patrulha",
  "situacao": "Disponível"
}
```

### Resposta

```json
{
  "message": "Embarcação cadastrada com sucesso."
}
```

---

## ✅ Funcionalidades

- Cadastro de embarcações
- Consulta individual
- Consulta geral
- Atualização total (PUT)
- Atualização parcial (PATCH)
- Exclusão individual
- Exclusão total
- Integração com PostgreSQL
- Arquitetura MVC

---

## 👨‍💻 Autor

**Adson Pablo Moreira Barbosa**

Projeto desenvolvido para a disciplina Fullstack, sob orientação do professor **Valtemir Procópio de Lima**. 