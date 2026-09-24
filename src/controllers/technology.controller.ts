import { Request, Response, NextFunction } from 'express';
import { TechnologyRepository } from '../repositories/technology.repository';

const techRepo = new TechnologyRepository();

export class TechnologyController {
  // POST /api/technologies
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;
      const existing = await techRepo.findByName(name);

      if (existing) {
        return res.status(409).json({
          status: 'error',
          message: 'Tecnologia já cadastrada com este nome'
        });
      }

      const tech = await techRepo.create(req.body);
      return res.status(201).json({
        status: 'success',
        data: tech
      });
    } catch (error) {
      next(error);
    }
  }

  // GET /api/technologies
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const list = await techRepo.findAll();
      return res.status(200).json({
        status: 'success',
        data: list
      });
    } catch (error) {
      next(error);
    }
  }
}
