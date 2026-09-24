import { Router } from 'express';
import { ProfileController } from '../controllers/profile.controller';
import { validate } from '../middlewares/validate';
import { CreateProfileSchema } from '../dtos/profile.dto';

const router = Router();

// Validação aplicada antes de chamar o controller
router.post('/', validate(CreateProfileSchema), ProfileController.create);
router.get('/:id', ProfileController.getById);

export default router;
