import { z } from 'zod';

export const CreateProjectSchema = z.object({
  title: z.string().min(1, 'Título não pode ser vazio').trim(),
  description: z.string().min(5, 'Descrição deve ter no mínimo 5 caracteres').trim(),
  repositoryUrl: z.string().url('URL do repositório deve ser válida'),
  liveUrl: z.string().url('URL live inválida').optional().or(z.literal('')),
  profileId: z.string().uuid('profileId deve ser um UUID válido'),
  technologyIds: z.array(z.string().uuid()).optional(),
});

export type CreateProjectDTO = z.infer<typeof CreateProjectSchema>;
