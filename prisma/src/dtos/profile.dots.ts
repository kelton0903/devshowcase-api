import { z } from 'zod';

export const CreateProfileSchema = z.object({
  name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres').trim(),
  email: z.string().email('E-mail inválido'),
  bio: z.string().max(500).optional(),
  githubUrl: z.string().url('URL do GitHub inválida').optional().or(z.literal('')),
  avatarUrl: z.string().url('URL do Avatar inválida').optional().or(z.literal('')),
});

export type CreateProfileDTO = z.infer<typeof CreateProfileSchema>;
