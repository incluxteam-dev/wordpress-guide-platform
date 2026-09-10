# Schema Database - WordPress Guide Platform

## 📊 Modelo de Dados

### Users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  experience_level VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);
```

### Projects
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  site_type VARCHAR(50) NOT NULL,
  domain VARCHAR(255),
  hosting VARCHAR(255),
  overall_status VARCHAR(50) DEFAULT 'EM_PROGRESSO',
  progress_percentage INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);
```

### Tasks
```sql
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  order_index INT NOT NULL,
  min_experience_level VARCHAR(50) NOT NULL,
  tips TEXT,
  resources_recommended JSONB,
  created_at TIMESTAMP DEFAULT now()
);
```

### ProjectTasks (Progresso)
```sql
CREATE TABLE project_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  task_id UUID NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT false,
  user_notes TEXT,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  UNIQUE(project_id, task_id)
);
```

### Recommendations
```sql
CREATE TABLE recommendations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id UUID NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
  site_type VARCHAR(50) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  url VARCHAR(255),
  priority VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);
```

## 🔗 Relações

```
users (1) ──────── (N) projects
projects (1) ────── (N) project_tasks
tasks (1) ────── (N) project_tasks
tasks (1) ────── (N) recommendations
```

## 📈 Índices para Performance

```sql
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_project_tasks_project_id ON project_tasks(project_id);
CREATE INDEX idx_project_tasks_task_id ON project_tasks(task_id);
CREATE INDEX idx_recommendations_task_id ON recommendations(task_id);
CREATE INDEX idx_tasks_category ON tasks(category);
```

## 🌱 Seed Data (Tarefas Iniciais)

Ver `backend/prisma/seeds/tasks.ts` para a lista completa de tarefas pré-carregadas.
