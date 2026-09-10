import type { NextFunction, Request, Response } from 'express';

type KnownError = {
  status?: number;
  statusCode?: number;
  message?: string;
};

export function errorHandler(error: unknown, _req: Request, res: Response, _next: NextFunction) {
  console.error(error);
  const knownError = error as KnownError;
  const status = knownError.status ?? knownError.statusCode ?? 500;
  const message = status >= 500 ? 'Internal server error' : knownError.message ?? 'Request error';

  res.status(status).json({
    message
  });
}
