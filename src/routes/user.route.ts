import {Request, Router} from 'express';
import { UserController } from '../controllers/user.controller';
import { authenticate } from '../middleware/auth.middleware';
import { validateUserSignup } from '../middleware/validation.middleware';

const userRouter = Router();
const userController = new UserController();

//LOGIN
userRouter.post('/login', (req, res) => userController.login(req, res))

userRouter.post('/', validateUserSignup, (req, res) => userController.create(req,res))
userRouter.get('/', (req, res) => userController.findAll(req, res))

export = userRouter;

