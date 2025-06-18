# ApiAgenda

Uma API simples para gerenciamento de tarefas (To-Do List) construída com Node.js, Express e MongoDB.

## Funcionalidades
- **CRUD de tarefas:**
  - Criar, listar, atualizar e deletar tarefas.
- **Persistência:**
  - Utiliza MongoDB para armazenar as tarefas.
- **API RESTful:**
  - Endpoints para manipulação das tarefas.

## Estrutura do Projeto
```
index.js              # Arquivo principal da aplicação
models/Task.js        # Modelo Mongoose para tarefas
routes/tasks.js       # Rotas da API para tarefas
.env                  # Variáveis de ambiente (não subir senha para o GitHub)
```

## Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/rafaelVictor05/Agenda-API.git
   cd ApiAgenda
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure o arquivo `.env` com sua string de conexão do MongoDB:
   ```env
   MONGO_URL=mongodb+srv://<usuario>:<senha>@<host>/<database>
   PORT=3000
   ```

## Uso
1. Inicie o servidor:
   ```sh
   npm start
   ```
2. Acesse os endpoints via `http://localhost:3000/api/tasks` ou via nuvem em `https://agenda-api-9zhi.onrender.com/api/tasks`
- Caso use a API hospedada na nuvem, a primeira resposta pode demorar de 30 segundos a 1 minuto para ser processada enquanto o servidor é reativado.

## Endpoints
- `GET    /api/tasks`         → Lista todas as tarefas
- `POST   /api/tasks`         → Cria uma nova tarefa
- `PUT    /api/tasks/:id`     → Atualiza uma tarefa existente
- `DELETE /api/tasks/:id`     → Remove uma tarefa

## Observações
- Não compartilhe o arquivo `.env` com informações sensíveis.
- Certifique-se de que o MongoDB está acessível.

## Licença
MIT
