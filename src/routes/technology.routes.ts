import { Router } from 'express';
import { TechnologyController } from '../controllers/technology.controller';
import { validate } from '../middlewares/validate';
import { CreateTechnologySchema } from '../dtos/technology.dto';

const router = Router();

router.post('/', validate(CreateTechnologySchema), TechnologyController.create);
router.get('/', TechnologyController.getAll);

export default router;
