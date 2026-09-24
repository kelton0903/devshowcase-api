import { prisma } from '../config/prisma';
import { CreateTechnologyDTO } from '../dtos/technology.dto';

export class TechnologyRepository {
  async create(data: CreateTechnologyDTO) {
    return prisma.technology.create({
      data: {
        name: data.name,
        category: data.category || null,
      },
    });
  }

  async findAll() {
    return prisma.technology.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async findByName(name: string) {
    return prisma.technology.findUnique({
      where: { name },
    });
  }
}
