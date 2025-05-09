

# 📄 API de Exames e Agendamentos

Sistema para gerenciamento e agendamento de **exames** hospitalares. Utiliza Express com suporte a TypeScript para garantir tipagem e manutenibilidade do código.

### 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/valdirsillva/api-agendamento-exames.git
cd nome-do-projeto
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

### ⚙️ Configuração

Crie um arquivo `.env` com as variáveis de ambiente produção (exemplo: porta da API, URL do banco de dados, etc.). Exemplo:

Ambiente de produção:
```env
PORT=5000
DATABASE_URL=postgresql://usuario:senha@localhost:5432/seu_banco
```

Ambiente de desenvolvimento:

```env
PORT=5000
DATABASE_NAME=
POSTGRES_USER= 
POSTGRES_PASSWORD=
POSTGRES_PORT=5432
POSTGRES_HOST=
```

## 📁 Endpoints Disponíveis

### 🔍 Listar Exames

* **Método:** `GET`
* **Rota:** `api/exames`
* **Descrição:** Retorna a lista de exames disponíveis.
* * Ex:
```json
[{
  "id": 1,
  "nome": "Mamografia",
  "especialidade": ["Ginecologia","Mastologia"],
  "dataCriacao": "2025-05-09 13:52:26.967221+00"
}]
```

### 📝 Criar Agendamento

* **Método:** `POST`
* **Rota:** `api/agendamentos`
* **Descrição:** Cria um novo agendamento de exame com os dados fornecidos no corpo da requisição.

* Ex:
```json
{
  "exameId": 456,
  "dataAgendamento": "2025-05-15T09:00:00",
  "observacoes": "Paciente precisa de jejum de 12 horas"
}
```

### 📋 Listar Agendamentos

* **Método:** `GET`
* **Rota:** `api/agendamentos`
* **Descrição:** Retorna todos os agendamentos realizados.
* 
* Ex:
```json
[{
  "id": 1,
  "exame": "Radiologia",
  "dataAgendamento": "2025-05-15T09:00:00",
  "observacoes": "Paciente precisa de jejum de 12 horas"
}]
```

### ❌ Remover Agendamento

* **Método:** `DELETE`
* **Rota:** `api/agendamentos/:exameId`
* **Descrição:** Remove o agendamento correspondente ao `exameId` fornecido.
* **Parâmetros de rota:**

  * `exameId` (number): ID do exame agendado a ser removido.

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **Express**
* **TypeScript**
* **KnexJS**
* **PostgresSQL**
* **Material UI**
* **Tailwindcss**    

