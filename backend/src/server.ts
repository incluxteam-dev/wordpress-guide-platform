import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import healthRoutes from './routes/healthRoutes';
import taskRoutes from './routes/taskRoutes';
import { errorHandler } from './middleware/errorHandler';

export function createServer() {
  const app = express();
  const allowedOrigins = (process.env.FRONTEND_URL ?? 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  app.use(helmet());
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
          return;
        }

        callback(new Error('CORS origin not allowed'));
      }
    })
  );
  app.use(express.json());
  app.use(morgan('dev'));

  app.use('/health', healthRoutes);
  app.use('/api/tasks', taskRoutes);

  app.use(errorHandler);

  return app;
}
