# Arquitetura - WordPress Guide Platform

## 🏗️ Visão Geral

```
┌─────────────────────────────────────────────────────────────────────┐
│                    WORDPRESS GUIDE PLATFORM             │
├─────────────────────────────────────────────────────────────────────┤
│                                                           │
│  ┌──────────────────────────────────────────────────┐   │
│  │          FRONTEND (React + TypeScript + Tailwind)      │
│  │  - Onboarding Flow                               │   │
│  │  - Decision Tree                                 │   │
│  │  - Task Categories                               │   │
│  │  - User Dashboard                                │   │
│  │  - Project Management                            │   │
│  └────────────────┬─────────────────────────────────┘   │
│                   │ (HTTP REST)                          │
│  ┌────────────────▼─────────────────────────────────┐   │
│  │       BACKEND (Node.js + Express)                │   │
│  │  - Authentication (Supabase Auth)                │   │
│  │  - Project Management API                        │   │
│  │  - Task/Progress Tracking                        │   │
│  │  - Recommendations Engine                        │   │
│  │  - User Preferences                              │   │
│  └────────────────┬─────────────────────────────────┘   │
│                   │ (Prisma ORM)                         │
│  ┌────────────────▼─────────────────────────────────┐   │
│  │   DATABASE (Supabase PostgreSQL)                 │   │
│  │  - Users & Authentication                        │   │
│  │  - Projects                                      │   │
│  │  - Tasks                                         │   │
│  │  - Project Progress                              │   │
│  │  - Recommendations                               │   │
│  └──────────────────────────────────────────────────┘   │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

## 📊 Fluxo de Dados

### Autenticação
```
1. Utilizador faz Login/Signup
2. Supabase autentica e retorna JWT
3. Token armazenado no localStorage
4. Todos os requests incluem Authorization header
5. Backend valida token com Supabase
```

### Criação de Projeto
```
1. Utilizador clica "Novo Projeto"
2. Frontend envia dados (nome, tipo, nível experiência)
3. Backend cria projeto em DB
4. Backend carrega tarefas relevantes
5. Frontend mostra dashboard do projeto
```

### Progresso
```
1. Utilizador marca tarefa como completa
2. Frontend envia PUT request
3. Backend atualiza ProjectTasks
4. Frontend atualiza estado local
5. Progresso percentual é recalculado
```

## 🎯 Decisões de Design

### Por que Supabase?
- ✅ PostgreSQL gerenciado
- ✅ Autenticação integrada
- ✅ Row Level Security
- ✅ Gratuito no início
- ✅ Sem vendor lock-in (é PostgreSQL)

### Por que Prisma?
- ✅ Type-safe queries
- ✅ Migrations automáticas
- ✅ Schema versioning
- ✅ Perfeito para Júnior (sintaxe clara)

### Por que Zustand?
- ✅ Simples (sem boilerplate)
- ✅ State management minimalista
- ✅ Fácil para Júnior entender

## 🔐 Segurança

- JWT tokens para autenticação
- Row Level Security no Supabase
- HTTPS em produção
- CORS configurado
- Validação de inputs
- Hash de passwords (Supabase)

## 📈 Escalabilidade

- Database escalável (Supabase pode crescer)
- Frontend estático em Vercel
- Backend sem estado (stateless)
- Cache futuro com Redis
- CDN para assets
