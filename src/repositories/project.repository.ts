import { prisma } from '../config/prisma';
import { CreateProjectDTO } from '../dtos/project.dto';

export class ProjectRepository {
  async create(data: CreateProjectDTO) {
    const { technologyIds, ...rest } = data;
    return prisma.project.create({
      data: {
        ...rest,
        technologies: technologyIds ? {
          create: technologyIds.map(techId => ({ technology: { connect: { id: techId } } }))
        } : undefined
      },
      include: { profile: true, technologies: { include: { technology: true } } }
    });
  }

  async findAll() {
    return prisma.project.findMany({
      include: { profile: true, technologies: { include: { technology: true } } }
    });
  }
}
