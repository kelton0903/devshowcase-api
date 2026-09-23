import { prisma } from '../config/prisma';
import { CreateProfileDTO } from '../dtos/profile.dto';

export class ProfileRepository {
  async create(data: CreateProfileDTO) {
    return prisma.profile.create({ data });
  }

  async findById(id: string) {
    return prisma.profile.findUnique({
      where: { id },
      include: { projects: true }
    });
  }

  async findByEmail(email: string) {
    return prisma.profile.findUnique({ where: { email } });
  }
}
