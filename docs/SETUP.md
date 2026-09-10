# Setup Detalhado - WordPress Guide Platform

## 📋 Pré-requisitos

- Node.js 18+ ([Download](https://nodejs.org/))
- npm ou yarn
- Git
- Conta Supabase (grátis em [supabase.com](https://supabase.com))
- Conta Vercel (para deploy - grátis)

## 🔧 Passo 1: Setup Supabase

### 1.1 Criar Projeto Supabase

1. Vá para [supabase.com](https://supabase.com)
2. Clique "New Project"
3. Selecione região (ex: Europe)
4. Nome: `wordpress-guide`
5. Clique "Create new project"

### 1.2 Copiar Credenciais

1. Na dashboard, vá a "Settings" → "API"
2. Copie:
   - `Project URL` → `VITE_SUPABASE_URL`
   - `anon public` key → `VITE_SUPABASE_ANON_KEY`
   - `service_role` secret (para backend)

### 1.3 Obter Database URL

1. Settings → Database
2. Copie a URI de conexão

## 🚀 Passo 2: Setup Projeto Local

### 2.1 Clone e Instale

```bash
# Clone
git clone https://github.com/incluxteam-dev/wordpress-guide-platform.git
cd wordpress-guide-platform

# Instale dependências raiz
npm install
```

### 2.2 Configure Variáveis de Ambiente

```bash
# Frontend
cd frontend
cp .env.example .env.local
```

Edite `frontend/.env.local`:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_API_URL=http://localhost:3000/api
```

```bash
# Backend
cd ../backend
cp .env.example .env.local
```

Edite `backend/.env.local`:
```
DATABASE_URL=postgresql://user:password@host/database
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
PORT=3000
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key_here
```

### 2.3 Setup Backend

```bash
cd backend

# Instale dependências
npm install

# Gere cliente Prisma
npx prisma generate

# Execute migrações
npx prisma migrate deploy

# Seed database (carga dados iniciais)
npx prisma db seed

# Inicie server
npm run dev
```

O backend estará em `http://localhost:3000`

### 2.4 Setup Frontend

Em outro terminal:

```bash
cd frontend

# Instale dependências
npm install

# Inicie dev server
npm run dev
```

O frontend estará em `http://localhost:5173`

## ✅ Verificar Setup

1. Abra `http://localhost:5173`
2. Clique "Sign Up"
3. Crie conta
4. Deve redirecionar para dashboard

Se funcionar, você está pronto! 🎉

## 🐛 Troubleshooting

### Erro: "Cannot find module 'prisma'"
```bash
cd backend
npm install
```

### Erro: "Database connection refused"
- Verifique `DATABASE_URL` em `.env.local`
- Certifique-se Supabase está online

### Erro: "CORS error"
- Verifique `VITE_API_URL` está correto
- Backend deve estar rodando

## 📖 Próximos Passos

1. Leia [ARCHITECTURE.md](./ARCHITECTURE.md)
2. Leia [API.md](./API.md)
3. Comece a desenvolver componentes React
4. Teste com Postman/Insomnia
