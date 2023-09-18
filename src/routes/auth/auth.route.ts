import {Router} from 'express';
import { LoginController } from '../../controllers/Auth/Login.controller';
import { SignupController } from '../../controllers/Auth/SignUp.controller';
import { authenticate } from '../../middleware/auth.middleware';

const authRouter = Router();
const loginController = new LoginController();
const signupController = new SignupController()

authRouter.get('/login', authenticate, loginController.login)
authRouter.get('/signup', signupController.signup)

export = authRouter