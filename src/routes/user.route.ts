import {Request, Router} from 'express';
import { UserController } from '../controllers/user.controller';
import { authenticate } from '../middleware/auth.middleware';
import { validateUser } from '../middleware/validation.middleware';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', authenticate, validateUser, userController.create)
userRouter.get('/', authenticate, userController.findAll)

export = userRouter;

