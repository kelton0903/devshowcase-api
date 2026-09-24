import { z } from 'zod';

export const CreateTechnologySchema = z.object({
  name: z.string().min(1, 'Nome da tecnologia não pode ser vazio').trim(),
  category: z.string().optional(),
});

export type CreateTechnologyDTO = z.infer<typeof CreateTechnologySchema>;
