import { Request, Response, NextFunction } from 'express';
import { ProfileRepository } from '../repositories/profile.repository';

const profileRepo = new ProfileRepository();

export class ProfileController {
  // POST /api/profiles
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      const existing = await profileRepo.findByEmail(email);

      if (existing) {
        return res.status(409).json({
          status: 'error',
          message: 'Já existe um perfil cadastrado com este e-mail',
        });
      }

      const profile = await profileRepo.create(req.body);
      return res.status(201).json({
        status: 'success',
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET /api/profiles/:id
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const profile = await profileRepo.findById(id);

      if (!profile) {
        return res.status(404).json({
          status: 'error',
          message: 'Perfil não encontrado',
        });
      }

      return res.status(200).json({
        status: 'success',
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }
}
