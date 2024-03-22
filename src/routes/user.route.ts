import {Request, Router} from 'express';
import { UserController } from '../controllers/user.controller';
import { authenticate } from '../middleware/auth.middleware';

const userRouter = Router();
const userController = new UserController();


userRouter.post('/', authenticate, userController.create)
userRouter.get('/', authenticate, userController.findAll)

export = userRouter;

