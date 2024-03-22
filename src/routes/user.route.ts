import {Request, Router} from 'express';
import { UserController } from '../controllers/user.controller';
import { authenticate } from '../middleware/auth.middleware';
import { validateUserSignup } from '../middleware/validation.middleware';

const userRouter = Router();
const userController = new UserController();

//LOGIN
userRouter.post('/login', userController.login)

userRouter.post('/', authenticate, validateUserSignup, userController.create)
userRouter.get('/', authenticate, userController.findAll)

export = userRouter;

