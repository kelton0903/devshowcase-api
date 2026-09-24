import { Request, Response, NextFunction } from 'express';
import { ProjectRepository } from '../repositories/project.repository';
import { ProfileRepository } from '../repositories/profile.repository';

const projectRepo = new ProjectRepository();
const profileRepo = new ProfileRepository();

export class ProjectController {
  // POST /api/projects
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { profileId } = req.body;
      
      // Verifica se o autor existe antes de associar o projeto
      const profile = await profileRepo.findById(profileId);
      if (!profile) {
        return res.status(404).json({
          status: 'error',
          message: 'Perfil não encontrado para o profileId informado'
        });
      }

      const project = await projectRepo.create(req.body);
      return res.status(201).json({
        status: 'success',
        data: project
      });
    } catch (error) {
      next(error);
    }
  }

  // GET /api/projects
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const list = await projectRepo.findAll();
      return res.status(200).json({
        status: 'success',
        data: list
      });
    } catch (error) {
      next(error);
    }
  }
}
