import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

export const validate = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        const issues = error.issues || (error as any).errors || [];
        return res.status(400).json({
          status: 'error',
          message: 'Erro de validação nos campos informados',
          errors: issues.map((e: any) => ({
            field: Array.isArray(e.path) ? e.path.join('.') : String(e.path),
            message: e.message,
          })),
        });
      }
      return res.status(500).json({ status: 'error', message: 'Erro interno no servidor' });
    }
  };
};
