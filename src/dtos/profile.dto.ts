import { z } from 'zod';

export const CreateProfileSchema = z.object({
  name: z.string().min(2, 'O nome deve ter no mínimo 2 caracteres').trim(),
  email: z.string().email('Formato de e-mail inválido'),
  bio: z.string().max(500).optional(),
  githubUrl: z.string().url('A URL do GitHub deve ser válida').optional().or(z.literal('')),
  avatarUrl: z.string().url('A URL do avatar deve ser válida').optional().or(z.literal('')),
});

export type CreateProfileDTO = z.infer<typeof CreateProfileSchema>;
