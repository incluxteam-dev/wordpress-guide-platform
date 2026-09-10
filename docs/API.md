# API Endpoints - WordPress Guide Platform

## Base URL
```
http://localhost:3000/api
```

## 🔐 Autenticação

Todos os endpoints (exceto Auth) requerem header:
```
Authorization: Bearer <jwt_token>
```

---

## 🔑 AUTH Endpoints

### POST /auth/signup
Cria nova conta
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "João Silva"
}
```

### POST /auth/login
Faz login
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### POST /auth/logout
Faz logout

### GET /auth/me
Obtém dados do utilizador atual

---

## 📁 PROJECTS Endpoints

### GET /projects
Lista todos os projetos do utilizador

### POST /projects
Cria novo projeto
```json
{
  "name": "Meu Blog",
  "siteType": "BLOG",
  "experienceLevel": "INICIANTE"
}
```

### GET /projects/:id
Obtém detalhes do projeto

### PUT /projects/:id
Atualiza projeto

### DELETE /projects/:id
Deleta projeto

---

## ✅ TASKS Endpoints

### GET /projects/:id/tasks
Lista tarefas do projeto

### PUT /projects/:id/tasks/:taskId
Marca tarefa como completa/incompleta
```json
{
  "completed": true,
  "userNotes": "Notas do utilizador..."
}
```

### GET /tasks
Lista todas as tarefas do sistema

---

## 💡 RECOMMENDATIONS Endpoints

### GET /projects/:id/recommendations
Obtém recomendações de plugins/temas para o projeto

---

## ⚠️ Error Responses

### 400 Bad Request
```json
{
  "error": "Validation error",
  "details": { "field": "email", "message": "Invalid email" }
}
```

### 401 Unauthorized
```json
{
  "error": "Unauthorized",
  "message": "Token expired or invalid"
}
```

### 404 Not Found
```json
{
  "error": "Resource not found",
  "message": "Project with id 'xyz' not found"
}
```
