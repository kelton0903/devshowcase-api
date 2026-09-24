import { Router } from 'express';
import { ProjectController } from '../controllers/project.controller';
import { validate } from '../middlewares/validate';
import { CreateProjectSchema } from '../dtos/project.dto';

const router = Router();

router.post('/', validate(CreateProjectSchema), ProjectController.create);
router.get('/', ProjectController.getAll);

export default router;
